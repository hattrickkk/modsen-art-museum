import React, { useState } from 'react'
import { StyledHeader, StyledHeaderLogo } from './styled'
import { StyledContainer } from '@styles/styles'
import { Flex } from '@styles/flexStyles'
import { Link } from 'react-router-dom'
import logo from '@assets/logo-light.svg'
import HeaderNav from '@components/headerNav/HeaderNav'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@store/index'
import { closeBurgerMenuAction } from '@store/burgerMenu/actions'

const Header = () => {
    const isOpen = useSelector((state: AppState) => state.burgerMenu.isOpen)
    const dispath = useDispatch<AppDispatch>()

    return (
        <StyledHeader>
            <StyledContainer>
                <Flex>
                    <StyledHeaderLogo
                        onClick={() => {
                            isOpen && dispath(closeBurgerMenuAction())
                        }}
                    >
                        <Link to={'/'}>
                            <img src={logo} alt='logo' />
                        </Link>
                    </StyledHeaderLogo>
                    <HeaderNav />
                </Flex>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header
