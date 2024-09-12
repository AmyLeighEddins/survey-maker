import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test.describe('Login page', () => {
  test('login redirects to dashboard', async ({ page }) => {
    // Arrange
    const mockUser = {
      email: 'user1@example.com',
      password: 'password',
    };
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    // Act
    await loginPage.login(mockUser.email, mockUser.password);

    // Assert
    await expect(page.getByRole('heading', { name: 'Your Dashboard' })).toBeVisible();
  });
});