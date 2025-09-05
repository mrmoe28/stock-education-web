#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const DEPLOYMENT_URL = 'https://stock-education-ijgyb1jfe-ekoapps.vercel.app';
const LOG_DIR = '.claude/logs';
const TIMESTAMP = new Date().toISOString().replace(/:/g, '-');

// Ensure log directory exists
if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
}

const logFile = path.join(LOG_DIR, `error-check-${TIMESTAMP}.log`);

function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(logFile, logMessage + '\n');
}

async function checkDeployment() {
    log('🔍 Starting error detection scan...');
    
    try {
        // Check main page
        const response = await fetch(DEPLOYMENT_URL);
        const html = await response.text();
        
        // Look for common error patterns
        const errorPatterns = [
            /error/gi,
            /exception/gi,
            /failed/gi,
            /404/gi,
            /500/gi,
            /internal server error/gi,
            /application error/gi
        ];
        
        const foundErrors = [];
        errorPatterns.forEach((pattern, index) => {
            const matches = html.match(pattern);
            if (matches) {
                foundErrors.push({
                    type: ['error', 'exception', 'failed', '404', '500', 'server_error', 'app_error'][index],
                    count: matches.length,
                    pattern: pattern.source
                });
            }
        });
        
        if (foundErrors.length > 0) {
            log(`❌ Found ${foundErrors.length} error types:`);
            foundErrors.forEach(error => {
                log(`  - ${error.type}: ${error.count} occurrences`);
            });
            
            // Trigger auto-fix
            log('🔧 Triggering auto-fix workflow...');
            require('./auto-fix.js').run(foundErrors);
            
        } else {
            log('✅ No errors detected in deployment');
        }
        
        // Check API endpoints
        await checkApiEndpoints();
        
    } catch (error) {
        log(`❌ Error during deployment check: ${error.message}`);
    }
}

async function checkApiEndpoints() {
    log('🔍 Checking API endpoints...');
    
    const endpoints = [
        '/api/auth/session',
        '/api/auth/providers'
    ];
    
    for (const endpoint of endpoints) {
        try {
            const response = await fetch(DEPLOYMENT_URL + endpoint);
            const status = response.status;
            
            if (status >= 400) {
                log(`❌ API endpoint ${endpoint} returned ${status}`);
            } else {
                log(`✅ API endpoint ${endpoint} is healthy (${status})`);
            }
        } catch (error) {
            log(`❌ Failed to check ${endpoint}: ${error.message}`);
        }
    }
}

// Run the check
checkDeployment().then(() => {
    log('🏁 Error detection scan complete');
}).catch(error => {
    log(`💥 Fatal error during scan: ${error.message}`);
});