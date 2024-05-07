import React from 'react'
import { render, screen } from '@testing-library/react'
import CardsContainer from '.'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@store/index'
import { MOCK_ITEMS_LIST } from '@constants/mockData'

describe('CardsContainer component', () => {
    test('renders cards correctly', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <CardsContainer list={MOCK_ITEMS_LIST} big />
                </Provider>
            </MemoryRouter>
        )

        const cardElements = screen.getAllByText(/card/i)
        expect(cardElements).toHaveLength(MOCK_ITEMS_LIST.length)

        cardElements.forEach((_, i) => {
            const title = screen.getByText(MOCK_ITEMS_LIST[i].title)
            const author = screen.getByText(MOCK_ITEMS_LIST[i].author as string)

            expect(title).toBeInTheDocument()
            expect(author).toBeInTheDocument()
        })
    })
})
