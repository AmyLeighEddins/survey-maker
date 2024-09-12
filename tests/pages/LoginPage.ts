import { Locator, Page } from 'playwright-core';

class LoginPage {
  readonly page: Page;
  readonly email_field: Locator;
  readonly password_field: Locator;
  readonly login_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email_field = page.getByRole('textbox', { name: 'Email' });
    this.password_field = page.getByLabel('password');
    this.login_button = page.getByRole('button', { name: 'Login' });
  }

  async navigate() {
    await this.page.goto('/dashboard');
  }

  async login(username, password) {
    await this.email_field.fill(username);
    await this.password_field.fill(password);
    await this.login_button.click();
  }
}

export default LoginPage;