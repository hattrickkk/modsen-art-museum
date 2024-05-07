import React from 'react'
import { render, screen } from '@testing-library/react'
import CardDescription from '.'
import { Provider } from 'react-redux'
import store from '@store/index'
import { MOCK_ITEM } from '@constants/mockData'

describe('cardsDescription components', () => {
    test('cardsDescription renders with mockData', () => {
        render(
            <Provider store={store}>
                <CardDescription item={MOCK_ITEM} />
            </Provider>
        )

        expect(screen.getByText(MOCK_ITEM.title)).toBeInTheDocument()
        expect(screen.getByText(MOCK_ITEM.author as string)).toBeInTheDocument()
        expect(screen.getByText('Public')).toBeInTheDocument()
    })
})
