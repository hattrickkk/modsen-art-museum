import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import RadioItem from '.'

const props = {
    name: 'radioGroup',
    value: 'Option 1',
    id: 'radioOption1',
    checked: true,
    onClick: jest.fn(),
}

describe('radioItem component', () => {
    test('radioItem renders correct', () => {
        render(<RadioItem {...props} />)

        const radio: HTMLInputElement = screen.getByLabelText(props.value)
        expect(radio).toBeInTheDocument()
        expect(radio).toBeChecked()
    })

    test('radioItem changes checked property', () => {
        render(<RadioItem {...props} />)

        const radio: HTMLInputElement = screen.getByLabelText(props.value)
        fireEvent.change(radio, { target: { checked: false } })
        expect(radio.checked).toEqual(false)
    })
})
