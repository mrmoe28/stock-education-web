# Deployment Setup Instructions

## Production URLs
- **GitHub Repository**: https://github.com/mrmoe28/stock-education-web
- **Vercel Deployment**: https://stock-education-ijgyb1jfe-ekoapps.vercel.app
- **Vercel Project**: https://vercel.com/ekoapps/stock-education-web

## Required Environment Variables in Vercel

Go to your Vercel project settings and add these environment variables:

1. **NEXTAUTH_URL**
   - Value: `https://stock-education-ijgyb1jfe-ekoapps.vercel.app`
   
2. **NEXTAUTH_SECRET**
   - Value: (Use the value from your local .env.local file)
   
3. **GOOGLE_CLIENT_ID**
   - Value: (Use the value from your local .env.local file)
   
4. **GOOGLE_CLIENT_SECRET**
   - Value: (Use the value from your local .env.local file)

## Google OAuth Configuration

Add these URLs to your Google Cloud Console OAuth 2.0 Client:

### Authorized JavaScript origins:
- `https://stock-education-ijgyb1jfe-ekoapps.vercel.app`
- `http://localhost:3000` (for local development)

### Authorized redirect URIs:
- `https://stock-education-ijgyb1jfe-ekoapps.vercel.app/api/auth/callback/google`
- `http://localhost:3000/api/auth/callback/google` (for local development)

## Steps to Complete Setup:

1. **Add Environment Variables to Vercel**:
   - Go to https://vercel.com/ekoapps/stock-education-web/settings/environment-variables
   - Add all 4 environment variables listed above
   - Click "Save"

2. **Update Google OAuth Client**:
   - Go to https://console.cloud.google.com/apis/credentials
   - Click on your OAuth 2.0 Client ID
   - Add the production URLs listed above
   - Click "Save"

3. **Redeploy on Vercel**:
   - After adding environment variables, trigger a redeploy
   - Go to the Deployments tab in Vercel
   - Click "Redeploy" on the latest deployment

Your app will then be ready with Google OAuth authentication!