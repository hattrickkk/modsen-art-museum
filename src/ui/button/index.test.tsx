import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.'

const onClick = jest.fn()
const value = 'Button value'

describe('button ui component renders correctly', () => {
    test('button renders', () => {
        render(<Button value={value} onClick={onClick} />)

        expect(screen.getByText(value)).toBeInTheDocument()
    })
})
