import React from 'react'
import {
    StyledHeader,
    StyledHeaderBurger,
    StyledHeaderLogo,
    StyledHeaderMenu,
    StyledHeaderMenuItem,
    StyledHeaderNav,
} from './styled'
import { StyledContainer } from '@styles/styles'
import { Flex } from '@styles/flexStyles'
import { Link, useLocation } from 'react-router-dom'
import logo from '@assets/logo-light.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@store/index'
import { closeBurgerMenuAction, openBurgerMenuAction } from '@store/burgerMenu/actions'
import HomeIcon from '@ui/homeIcon/HomeIcon'
import SaveIcon from '@ui/saveIcon/SaveIcon'
import SaveIconNotEmpty from '@ui/saveIcon/SaveIconNotEmpty'
import * as paths from '@constants/paths'

const Header = () => {
    const isOpen = useSelector((state: AppState) => state.burgerMenu.isOpen)
    const dispath = useDispatch<AppDispatch>()
    const location = useLocation().pathname
    const hasFavs = !!useSelector((state: AppState) => state.favs.list.length)

    const burgerMenuToogle = () => {
        dispath(isOpen ? closeBurgerMenuAction() : openBurgerMenuAction())
    }

    return (
        <StyledHeader>
            <StyledContainer>
                <Flex>
                    <StyledHeaderLogo
                        onClick={() => {
                            isOpen && dispath(closeBurgerMenuAction())
                        }}
                    >
                        <Link to={paths.HOME_PAGE}>
                            <img src={logo} alt='logo' />
                        </Link>
                    </StyledHeaderLogo>
                    <StyledHeaderNav>
                        <StyledHeaderMenu $open={isOpen}>
                            {location !== paths.HOME_PAGE && (
                                <StyledHeaderMenuItem onClick={() => dispath(closeBurgerMenuAction())}>
                                    <Link to={paths.HOME_PAGE}>
                                        <HomeIcon />
                                        <span>Home</span>
                                    </Link>
                                </StyledHeaderMenuItem>
                            )}
                            <StyledHeaderMenuItem onClick={() => dispath(closeBurgerMenuAction())}>
                                <Link to={paths.FAVORITES_PAGE}>
                                    {hasFavs ? <SaveIconNotEmpty /> : <SaveIcon />}
                                    <span>Your favorites</span>
                                </Link>
                            </StyledHeaderMenuItem>
                        </StyledHeaderMenu>

                        <StyledHeaderBurger $open={isOpen} onClick={burgerMenuToogle}>
                            <span></span>
                        </StyledHeaderBurger>
                    </StyledHeaderNav>
                </Flex>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header
