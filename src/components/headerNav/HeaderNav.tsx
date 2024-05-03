import { AppDispatch, AppState } from '@store/index'
import HomeIcon from '@ui/homeIcon/HomeIcon'
import SaveIcon from '@ui/saveIcon/SaveIcon'
import SaveIconNotEmpty from '@ui/saveIcon/SaveIconNotEmpty'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { StyledHeaderNav, StyledHeaderMenu, StyledHeaderMenuItem, StyledHeaderBurger } from './styled'
import { closeBurgerMenuAction, openBurgerMenuAction } from '@store/burgerMenu/actions'

const HeaderNav = () => {
    const location = useLocation().pathname
    const hasFavs = !!useSelector((state: AppState) => state.favs.list.length)

    const isOpen = useSelector((state: AppState) => state.burgerMenu.isOpen)
    const dispath = useDispatch<AppDispatch>()

    const burgerMenuToogle = () => {
        dispath(isOpen ? closeBurgerMenuAction() : openBurgerMenuAction())
    }

    return (
        <StyledHeaderNav>
            <StyledHeaderMenu $open={isOpen}>
                {location !== '/' && (
                    <StyledHeaderMenuItem onClick={() => dispath(closeBurgerMenuAction())}>
                        <Link to={'/'}>
                            <HomeIcon />
                            <span>Home</span>
                        </Link>
                    </StyledHeaderMenuItem>
                )}
                <StyledHeaderMenuItem onClick={() => dispath(closeBurgerMenuAction())}>
                    <Link to={'/pictures/favorite'}>
                        {hasFavs ? <SaveIconNotEmpty /> : <SaveIcon />}
                        <span>Your favorites</span>
                    </Link>
                </StyledHeaderMenuItem>
            </StyledHeaderMenu>

            <StyledHeaderBurger $open={isOpen} onClick={burgerMenuToogle}>
                <span></span>
            </StyledHeaderBurger>
        </StyledHeaderNav>
    )
}

export default HeaderNav
