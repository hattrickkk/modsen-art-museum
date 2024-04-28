import React from 'react'
import { StyledButton } from './styled'

type PropsType = {
    value: string
    onClick: () => void
}

const Button = ({ value, onClick }: PropsType) => {
    return <StyledButton onClick={onClick}>{value}</StyledButton>
}

export default Button
