import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Login from '@/app/(auth)/login/page';
import userEvent from '@testing-library/user-event';
import { mockServer } from '../../testing/mocks/node';
import customRender from '../../testing/test-utils';
 
describe('Login Page', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  it('fills in email', async () => {
    // Arrange
    const mockUser = {
      email: 'test@example.com',
      password: 'password',
    };
    const user = userEvent.setup();
    customRender(<Login />);
    
    // Act
    const emailField = (screen.getByRole('textbox', { name: 'Email' })) as HTMLInputElement;
    const passwordField = (screen.getByLabelText('password')) as HTMLInputElement;
    await user.type(emailField, mockUser.email);
    await user.type(passwordField, mockUser.password)

    // Assert
    expect(emailField.value).toBe(mockUser.email);
    expect(passwordField.value).toBe(mockUser.password);
  });
});