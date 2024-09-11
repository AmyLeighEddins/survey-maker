import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
 
test.skip('Home Page', () => {
  render(<Page />);
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
});