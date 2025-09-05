#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG_DIR = '.claude/logs';
const TIMESTAMP = new Date().toISOString().replace(/:/g, '-');

// Ensure log directory exists
if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
}

const logFile = path.join(LOG_DIR, `auto-fix-${TIMESTAMP}.log`);

function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(logFile, logMessage + '\n');
}

async function runClaudeCommand(command, description) {
    return new Promise((resolve, reject) => {
        log(`🔧 ${description}...`);
        
        const claudeProcess = spawn('claude', command.split(' '), {
            stdio: 'pipe',
            shell: true
        });
        
        let output = '';
        let error = '';
        
        claudeProcess.stdout.on('data', (data) => {
            output += data.toString();
        });
        
        claudeProcess.stderr.on('data', (data) => {
            error += data.toString();
        });
        
        claudeProcess.on('close', (code) => {
            if (code === 0) {
                log(`✅ ${description} completed successfully`);
                resolve(output);
            } else {
                log(`❌ ${description} failed: ${error}`);
                reject(new Error(error));
            }
        });
    });
}

async function fixCommonIssues() {
    log('🚀 Starting automated error fixing...');
    
    try {
        // 1. Check and fix linting issues
        await runClaudeCommand('--prompt "Fix any ESLint errors in the codebase"', 'Fixing linting issues');
        
        // 2. Check for TypeScript errors
        await runClaudeCommand('--prompt "Fix any TypeScript compilation errors"', 'Fixing TypeScript errors');
        
        // 3. Check for missing dependencies
        await runClaudeCommand('--prompt "Check package.json for missing dependencies and fix them"', 'Checking dependencies');
        
        // 4. Check for build issues
        log('🔍 Running build check...');
        const buildResult = spawn('npm', ['run', 'build'], { stdio: 'pipe' });
        
        buildResult.on('close', async (code) => {
            if (code !== 0) {
                log('❌ Build failed, attempting to fix...');
                await runClaudeCommand('--prompt "Fix the build errors in this Next.js project"', 'Fixing build issues');
                
                // Try building again
                log('🔄 Retrying build...');
                const retryBuild = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
                
                retryBuild.on('close', (retryCode) => {
                    if (retryCode === 0) {
                        log('✅ Build fixed and successful!');
                        commitAndDeploy();
                    } else {
                        log('❌ Build still failing after fixes');
                    }
                });
            } else {
                log('✅ Build is already successful');
            }
        });
        
    } catch (error) {
        log(`❌ Error during auto-fix: ${error.message}`);
    }
}

async function commitAndDeploy() {
    log('📝 Committing fixes and triggering redeployment...');
    
    try {
        // Add and commit changes
        spawn('git', ['add', '.'], { stdio: 'inherit' });
        spawn('git', ['commit', '-m', '🤖 Auto-fix: Resolve deployment errors'], { stdio: 'inherit' });
        
        // Push to trigger redeployment
        spawn('git', ['push'], { stdio: 'inherit' });
        
        log('🚀 Changes pushed, redeployment triggered');
        
    } catch (error) {
        log(`❌ Error during commit/push: ${error.message}`);
    }
}

// Export for use by other scripts
module.exports = {
    run: fixCommonIssues
};

// Run directly if called
if (require.main === module) {
    fixCommonIssues().then(() => {
        log('🏁 Auto-fix workflow complete');
    }).catch(error => {
        log(`💥 Fatal error during auto-fix: ${error.message}`);
    });
}