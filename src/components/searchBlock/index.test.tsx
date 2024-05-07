import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import SearchBlock from '.'
import { Provider } from 'react-redux'
import store from '@store/index'
import { MemoryRouter } from 'react-router-dom'

describe('searchBlock componnet', () => {
    test('searchBlock renders correctly', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <SearchBlock />
                </Provider>
            </MemoryRouter>
        )

        const searchInput = screen.getByRole('textbox')
        act(() => {
            fireEvent.change(searchInput, { target: { value: 'cats' } })
        })

        expect(searchInput).toHaveValue('cats')
    })
})
