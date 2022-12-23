import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App test', () => {
    it ('must render hello world', () => {
        // Arrange
        render(<App />)
        // Act 
        // Assert
        expect(
            screen.getByRole('heading', {
                level: 1
            })
        ).toHaveTextContent('Hello world');
    })
})