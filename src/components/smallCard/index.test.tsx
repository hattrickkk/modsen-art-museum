import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '@store/index'
import { MemoryRouter } from 'react-router-dom'
import { MOCK_ITEM } from '@constants/mockData'
import SmallCard from '.'

describe('smallCard component', () => {
    test('renders smallCard with image and description correctly', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <SmallCard item={MOCK_ITEM} />
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
