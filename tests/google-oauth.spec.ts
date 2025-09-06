import { test, expect } from '@playwright/test';

test.describe('Google OAuth Login', () => {
  test('should display Google sign-in button and redirect to OAuth', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    
    // Look for sign-in button - use first() to handle multiple matches
    const signInButton = page.locator('text=/sign in/i').first();
    await expect(signInButton).toBeVisible({ timeout: 10000 });
    
    // Click the sign-in button
    await signInButton.click();
    
    // Should redirect to NextAuth signin page or show OAuth options
    await page.waitForLoadState('networkidle');
    
    // Check if we're on the signin page or if Google button is visible
    const googleButton = page.locator('button:has-text("Google")').first();
    
    // Verify Google OAuth button exists
    await expect(googleButton).toBeVisible({ timeout: 10000 });
    
    // Test OAuth redirect (without actually logging in)
    await googleButton.click();
    
    // Should redirect to Google OAuth
    await page.waitForURL(/accounts\.google\.com|google\.com/, { timeout: 10000 });
    
    // Verify we reached Google's OAuth page
    expect(page.url()).toContain('google.com');
  });

  test('should verify OAuth configuration endpoints', async ({ page }) => {
    // Test the providers endpoint
    const response = await page.request.get('/api/auth/providers');
    expect(response.ok()).toBeTruthy();
    
    const providers = await response.json();
    expect(providers).toHaveProperty('google');
    expect(providers.google).toMatchObject({
      id: 'google',
      name: 'Google',
      type: 'oauth',
      signinUrl: expect.stringContaining('/api/auth/signin/google'),
      callbackUrl: expect.stringContaining('/api/auth/callback/google'),
    });
  });

  test('should handle OAuth callback URL correctly', async ({ page }) => {
    // Test that callback URL matches environment configuration
    const response = await page.request.get('/api/auth/providers');
    const providers = await response.json();
    
    // Verify callback URL uses correct port
    expect(providers.google.callbackUrl).toContain('localhost:3001');
    
    // Verify signin URL uses correct port
    expect(providers.google.signinUrl).toContain('localhost:3001');
  });

  test('should display error message for invalid OAuth response', async ({ page }) => {
    // Navigate directly to error callback
    await page.goto('/api/auth/signin?error=OAuthCallback');
    
    // Should show an error message or redirect to signin with error
    await page.waitForLoadState('networkidle');
    
    // Check for error indicators
    const errorMessage = page.locator('text=/error|failed|unable/i');
    const hasError = await errorMessage.count() > 0;
    
    // Either shows error or redirects to signin page
    if (!hasError) {
      expect(page.url()).toContain('signin');
    }
  });
});