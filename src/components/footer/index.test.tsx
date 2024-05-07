import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '.'
import { MemoryRouter } from 'react-router-dom'

describe('footer component renders correctly', () => {
    test('footer renders with logo', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        )

        expect(screen.getByAltText('logo')).toBeInTheDocument()
    })
})
