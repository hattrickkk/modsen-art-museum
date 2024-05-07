import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from '.'
import store from '@store/index'

describe('Header component', () => {
    test('renders logo and menu items', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        )

        const logo = screen.getByAltText('logo')
        expect(logo).toBeInTheDocument()

        const homeLink = screen.queryByText(/Home/i)
        expect(homeLink).not.toBeInTheDocument()

        const favoritesLink = screen.getByText(/Your favorites/i)
        expect(favoritesLink).toBeInTheDocument()
    })
})
