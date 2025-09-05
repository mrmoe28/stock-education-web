# Google OAuth Setup for Vercel Deployment

## 🔐 Authorized JavaScript Origins
Add this URL to your Google Cloud Console OAuth 2.0 Client:

```
https://stock-education-ijgyb1jfe-ekoapps.vercel.app
```

## 🔄 Authorized Redirect URIs  
Add this URL to your Google Cloud Console OAuth 2.0 Client:

```
https://stock-education-ijgyb1jfe-ekoapps.vercel.app/api/auth/callback/google
```

## 📋 Quick Setup Steps

1. **Go to Google Cloud Console**:
   - Visit: https://console.cloud.google.com/apis/credentials

2. **Find Your OAuth 2.0 Client**:
   - Look for your existing OAuth client or create a new one

3. **Update Settings**:
   - Click on your OAuth 2.0 Client ID
   - In "Authorized JavaScript origins", add:
     `https://stock-education-ijgyb1jfe-ekoapps.vercel.app`
   - In "Authorized redirect URIs", add:
     `https://stock-education-ijgyb1jfe-ekoapps.vercel.app/api/auth/callback/google`
   - Click "Save"

4. **Add Environment Variables to Vercel**:
   - Go to: https://vercel.com/ekoapps/stock-education-web/settings/environment-variables
   - Add your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`

## ✅ Verification
After setup, your Google OAuth should work on your Vercel deployment at:
`https://stock-education-ijgyb1jfe-ekoapps.vercel.app/signin`