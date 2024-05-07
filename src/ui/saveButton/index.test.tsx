import React from 'react'
import { render, screen } from '@testing-library/react'
import SaveButton from '.'

const props = {
    onClick: jest.fn(),
    isFav: false,
}

describe('saveButton component', () => {
    test('saveButton renders correct', () => {
        render(<SaveButton {...props} />)

        const saveButton = screen.getByTestId('save-button')
        let styles = window.getComputedStyle(saveButton)
        expect(styles.backgroundColor).toEqual('rgb(240, 241, 241)')
    })
})
