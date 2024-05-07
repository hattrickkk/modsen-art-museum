import React from 'react'
import { render, screen } from '@testing-library/react'
import Pagination from '.'
import { HOME_PAGE } from '@constants/paths'
import { MemoryRouter } from 'react-router-dom'

describe('pagination component renders correctly', () => {
    test('renders correct number of pagination items', () => {
        render(
            <MemoryRouter>
                <Pagination currentPage={5} pagesCount={10} path={HOME_PAGE} />
            </MemoryRouter>
        )

        const paginationItems = screen.getAllByRole('link')
        expect(paginationItems).toHaveLength(7)
    })

    test('pagination renders without items', () => {
        render(
            <MemoryRouter>
                <Pagination currentPage={0} pagesCount={0} path={HOME_PAGE} />
            </MemoryRouter>
        )

        const paginationItems = screen.queryAllByRole('link')
        paginationItems.forEach(item => expect(item).toBeNull())
    })
})
