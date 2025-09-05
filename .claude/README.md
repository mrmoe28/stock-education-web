# Claude Code Automated Workflow Setup

This directory contains automated workflow scripts for your stock education web app.

## 🚀 Features

### 1. Automated Deployment Pipeline
- **Auto-deploy on push**: Vercel automatically deploys when you push to main branch
- **Pre-push validation**: Runs build, lint, and type checks before each push
- **Auto-fix on errors**: Claude automatically fixes common issues

### 2. Deployment Monitoring
- **Health checks**: Monitors deployment status every 5 minutes
- **Error detection**: Scans for runtime errors automatically
- **Performance monitoring**: Tracks page load times and API response times

### 3. Auto-Fixing Workflow
- **Lint errors**: Automatically fixes ESLint issues
- **Type errors**: Resolves TypeScript compilation problems
- **Build failures**: Identifies and fixes build configuration issues
- **Dependency issues**: Checks and updates package.json

## 📁 Directory Structure

```
.claude/
├── config.json                 # Main configuration
├── scripts/
│   ├── monitor-deployment.sh   # Deployment monitoring
│   ├── check-errors.js         # Error detection
│   └── auto-fix.js            # Automated fixing
├── workflows/
│   ├── pre-push.yml           # Pre-push validation
│   └── post-deployment.yml    # Post-deployment monitoring
├── logs/                      # Auto-generated logs
└── curl-format.txt           # Performance monitoring format
```

## 🔧 Usage

### Manual Triggers
```bash
# Monitor current deployment
./.claude/scripts/monitor-deployment.sh

# Check for errors
node .claude/scripts/check-errors.js

# Run auto-fix
node .claude/scripts/auto-fix.js
```

### Automatic Triggers
- **On git push**: Pre-push validation runs automatically
- **On deployment**: Post-deployment monitoring starts automatically
- **On error detection**: Auto-fix workflow triggers automatically

## 🛠️ Setup Instructions

1. **Add environment variables to Vercel**:
   - Copy values from `.env.template` 
   - Add them to your Vercel project settings
   - Include your NextAuth and Google OAuth credentials

2. **Configure Claude Code**:
   ```bash
   # Ensure Claude is authenticated
   claude --help
   ```

3. **Test the workflow**:
   ```bash
   # Make a small change and push
   git add .
   git commit -m "Test automated workflow"
   git push
   ```

## 📊 Monitoring

### Logs Location
- Deployment logs: `.claude/logs/deployment-*.log`
- Error check logs: `.claude/logs/error-check-*.log`
- Auto-fix logs: `.claude/logs/auto-fix-*.log`

### Key Metrics Tracked
- HTTP response codes
- Page load times
- API endpoint health
- Build success/failure rates
- Error frequency and types

## 🎯 Best Practices

1. **Always test locally first**: Run `npm run build` before pushing
2. **Review auto-fixes**: Check what Claude changed before the next push
3. **Monitor logs**: Regularly check `.claude/logs/` for issues
4. **Keep dependencies updated**: Claude will suggest updates automatically

## 🔐 Security Notes

- Database credentials are safely stored in environment variables
- Never commit `.env` files to git
- Use `.env.template` as a reference only
- Claude auto-fix never exposes secrets in logs

## 🚨 Troubleshooting

If the automated workflow fails:

1. Check the latest log file in `.claude/logs/`
2. Ensure all environment variables are set in Vercel
3. Verify Claude Code is properly authenticated
4. Run manual checks using the scripts above

## 📞 Support

For issues with this setup, check:
- Vercel deployment logs
- Claude Code documentation
- GitHub repository issues

---
*Last updated: $(date)*
*Workflow tested and verified* ✅