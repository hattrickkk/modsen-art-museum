import React from 'react'
import { StyledHeaderBurger } from './styled'

type PropsType = {
    isOpen: boolean
    clickHandler: () => void
}

const BurgerMenuButton = ({ isOpen, clickHandler }: PropsType) => {
    return (
        <StyledHeaderBurger $open={isOpen} onClick={clickHandler}>
            <span></span>
        </StyledHeaderBurger>
    )
}

export default BurgerMenuButton
