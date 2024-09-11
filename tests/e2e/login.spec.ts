import { test, expect } from '@playwright/test';

test.describe('Login page', () => {
  test('login redirects to dashboard', async ({ page }) => {
    // Arrange
    const mockUser = {
      email: 'user1@example.com',
      password: 'password',
    };
    await page.goto('/dashboard');
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  
    // Act
    const emailField = page.getByRole('textbox', { name: 'Email' });
    const passwordField = page.getByLabel('password');
    await emailField.fill(mockUser.email);
    await passwordField.fill(mockUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Assert
    await expect(page.getByRole('heading', { name: 'Your Dashboard' })).toBeVisible();
  });
});