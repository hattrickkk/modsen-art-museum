import React from 'react'
import { render, screen } from '@testing-library/react'
import SortPanel from '.'
import { SortParamsType } from '@customTypes/sort'
import { DIRECTION_FILTERS_NAMES, FIELD_FILTERS_NAMES } from '@constants/sort'

const sortParams: SortParamsType = {
    filter: FIELD_FILTERS_NAMES.title,
    direction: DIRECTION_FILTERS_NAMES.ascending,
}

describe('sort panel componnet', () => {
    test('sort panel renders correctly', () => {
        render(<SortPanel setSortParams={jest.fn()} sortParams={sortParams} />)

        const filterRadio = screen.getByLabelText(sortParams.filter)
        expect(filterRadio).toBeChecked()

        const directionsRadio = screen.getByLabelText(sortParams.direction)
        expect(directionsRadio).toBeChecked()
    })

    test('renders correct number of radio items', () => {
        render(<SortPanel setSortParams={jest.fn()} sortParams={sortParams} />)

        const allRadios = screen.getAllByTestId('radioItem')
        const filterRadios: HTMLInputElement[] = []
        const directionRadios: HTMLInputElement[] = []

        allRadios.forEach(el => {
            const radio = el.getElementsByTagName('input')[0]
            radio.name === 'filter' ? filterRadios.push(radio) : directionRadios.push(radio)
        })

        filterRadios.forEach((el, i) => {
            if (i) {
                if (el.name !== sortParams.filter) {
                    expect(el).not.toBeChecked()
                }
            }
        })

        directionRadios.forEach((el, i) => {
            if (i) {
                if (el.name !== sortParams.direction) {
                    expect(el).not.toBeChecked()
                }
            }
        })

        expect(filterRadios).toHaveLength(4)
        expect(directionRadios).toHaveLength(2)
    })
})
