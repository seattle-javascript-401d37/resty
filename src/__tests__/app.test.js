import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App.js'

describe('app', () => {

  it('loads the home page', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('homelink'));
    expect(screen.getByRole('document'));
  })


})
