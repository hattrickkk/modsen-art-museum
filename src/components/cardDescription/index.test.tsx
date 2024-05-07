import React from 'react'
import { render, screen } from '@testing-library/react'
import { PicType } from '@customTypes/picture'
import CardDescription from '.'
import { Provider } from 'react-redux'
import store from '@store/index'

const item: PicType = {
    id: 105293,
    title: 'Chest of Drawers',
    author: 'Artist unknown',
    isPublic: true,
    image: 'https://www.artic.edu/iiif/2/8cb72d4a-0be3-4a3d-63bc-b93bd6694fe6/full/843,/0/default.jpg',
}

describe('cardsDescription components', () => {
    test('cardsDescription renders with mockData', () => {
        render(
            <Provider store={store}>
                <CardDescription item={item} />
            </Provider>
        )

        expect(screen.getByText(item.title)).toBeInTheDocument()
    })
})
