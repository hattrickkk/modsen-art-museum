import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '.'
import { Provider } from 'react-redux'
import store from '@store/index'
import { MemoryRouter } from 'react-router-dom'
import { MOCK_ITEM } from '@constants/mockData'

describe('Card component', () => {
    test('renders card with image and description correctly', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Card item={MOCK_ITEM} />
                </Provider>
            </MemoryRouter>
        )

        const img = screen.getByAltText('')
        expect(img).toBeInTheDocument()

        expect(screen.getByText(MOCK_ITEM.title)).toBeInTheDocument()
        expect(screen.getByText(MOCK_ITEM.author as string)).toBeInTheDocument()
        expect(screen.getByText('Public')).toBeInTheDocument()
    })
})
