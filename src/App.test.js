// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenMind title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenMind/i);
    expect(titleElement).toBeInTheDocument();
});
