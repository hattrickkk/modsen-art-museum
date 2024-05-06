import React, { useCallback, useContext } from 'react'
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
import { useSelector } from 'react-redux'
import { AppState } from '@store/index'
import HomeIcon from '@ui/homeIcon'
import SaveIcon from '@ui/saveIcon'
import SaveIconNotEmpty from '@ui/saveIconNotEmpty'
import * as paths from '@constants/paths'
import { BurgerMenuContext } from '@contexts/burgerMenuContext'

const Header = () => {
    const { isOpen: isBurgerMenuOpen, open: openMenu, close: closeMenu } = useContext(BurgerMenuContext)
    const location = useLocation().pathname
    const hasFavs = !!useSelector((state: AppState) => state.favs.list.length)

    const burgerMenuToogle = useCallback(() => {
        isBurgerMenuOpen ? closeMenu() : openMenu()
    }, [isBurgerMenuOpen])

    return (
        <StyledHeader>
            <StyledContainer>
                <Flex>
                    <StyledHeaderLogo
                        onClick={() => {
                            isBurgerMenuOpen && closeMenu()
                        }}
                    >
                        <Link to={paths.HOME_PAGE}>
                            <img src={logo} alt='logo' />
                        </Link>
                    </StyledHeaderLogo>
                    <StyledHeaderNav>
                        <StyledHeaderMenu $open={isBurgerMenuOpen}>
                            {location !== paths.HOME_PAGE && /^\/[^/]+$/g.test(location) === false && (
                                <StyledHeaderMenuItem onClick={closeMenu}>
                                    <Link to={paths.HOME_PAGE}>
                                        <HomeIcon />
                                        <span>Home</span>
                                    </Link>
                                </StyledHeaderMenuItem>
                            )}
                            <StyledHeaderMenuItem onClick={closeMenu}>
                                <Link to={paths.FAVORITES_PAGE}>
                                    {hasFavs ? <SaveIconNotEmpty /> : <SaveIcon />}
                                    <span>Your favorites</span>
                                </Link>
                            </StyledHeaderMenuItem>
                        </StyledHeaderMenu>

                        <StyledHeaderBurger $open={isBurgerMenuOpen} onClick={burgerMenuToogle}>
                            <span></span>
                        </StyledHeaderBurger>
                    </StyledHeaderNav>
                </Flex>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header
