#!/bin/bash

# Deployment monitoring script for Claude Code
DEPLOYMENT_URL="https://stock-education-ijgyb1jfe-ekoapps.vercel.app"
LOG_FILE=".claude/logs/deployment-$(date +%Y%m%d-%H%M%S).log"

echo "🚀 Monitoring deployment at $DEPLOYMENT_URL" | tee -a "$LOG_FILE"

# Wait for deployment to be ready
sleep 30

# Check deployment health
HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" "$DEPLOYMENT_URL")

if [ "$HEALTH_CHECK" -eq 200 ]; then
    echo "✅ Deployment successful - HTTP $HEALTH_CHECK" | tee -a "$LOG_FILE"
    
    # Run error detection
    claude run-script .claude/scripts/check-errors.js
    
    # Performance check
    echo "🔍 Running performance check..." | tee -a "$LOG_FILE"
    curl -s "$DEPLOYMENT_URL" > /dev/null
    
else
    echo "❌ Deployment failed - HTTP $HEALTH_CHECK" | tee -a "$LOG_FILE"
    echo "🔧 Attempting auto-fix..." | tee -a "$LOG_FILE"
    
    # Trigger auto-fix workflow
    claude run-script .claude/scripts/auto-fix.js --deployment-error
fi

echo "📊 Deployment monitoring complete" | tee -a "$LOG_FILE"