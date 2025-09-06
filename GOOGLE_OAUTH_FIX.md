# Google OAuth Login Fix

## Problem Identified
The Google OAuth login was failing due to a **port mismatch** in the configuration:
- `.env.local` had `NEXTAUTH_URL=http://localhost:3003`
- Development server was running on port `3001`
- This caused OAuth callbacks to fail

## Solution Applied
Updated `NEXTAUTH_URL` in `.env.local` to match the actual server port:
```
NEXTAUTH_URL=http://localhost:3001
```

## Next Steps for Full OAuth Functionality

### 1. Verify Google Cloud Console Configuration
Ensure your OAuth application has the correct redirect URI:
- Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
- Select your OAuth 2.0 Client ID
- Add this Authorized redirect URI: `http://localhost:3001/api/auth/callback/google`

### 2. Test the Login Flow
1. Navigate to `http://localhost:3001`
2. Click the sign-in button
3. You should be redirected to Google OAuth
4. After authorization, you'll be redirected back to your app

## Current Configuration Status
✅ NextAuth configuration in `/src/app/api/auth/[...nextauth]/route.ts` - Correct
✅ Environment variables present in `.env.local`
✅ NEXTAUTH_URL now matches server port (3001)
✅ OAuth providers endpoint responding correctly

## Verification
The OAuth providers endpoint now correctly shows:
```json
{
  "google": {
    "callbackUrl": "http://localhost:3001/api/auth/callback/google"
  }
}
```

## Common Issues to Check
1. **Google Cloud Console redirect URI** must exactly match `http://localhost:3001/api/auth/callback/google`
2. **API Restrictions** - Ensure your Google OAuth app isn't restricted to specific domains
3. **OAuth Consent Screen** - Must be configured in Google Cloud Console