import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

describe('App test', () => {
    it ('must render hello world', () => {
        // Arrange
        render(<WrappedApp />)
        // Act 
        // Assert
        expect(
            screen.getByRole('heading', {
                level: 1
            })
        ).toHaveTextContent('Hello world');
    })

    it('Renders not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/babanas']}>
                <App/>
            </MemoryRouter>
        )

        expect(
            screen.getByRole('heading', {
                level: 1
            })
        ).toHaveTextContent('There is nothing');
    })
})