import { AppDispatch, AppState } from '@store/index'
import BurgerMenuButton from '@ui/burgerMenuButton/BurgerMenuButton'
import HomeIcon from '@ui/homeIcon/HomeIcon'
import SaveIcon from '@ui/saveIcon/SaveIcon'
import SaveIconNotEmpty from '@ui/saveIcon/SaveIconNotEmpty'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { StyledHeaderNav, StyledHeaderMenu } from './styled'
import { closeBurgerMenuAction, openBurgerMenuAction } from '@store/burgerMenu/actions'
import HeaderNavItem from '@components/headerNavItem/HeaderNavItem'

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
                    <HeaderNavItem path='/' onClick={() => dispath(closeBurgerMenuAction())}>
                        <HomeIcon />
                        <span>Home</span>
                    </HeaderNavItem>
                )}

                <HeaderNavItem path='/pictures/favorite' onClick={() => dispath(closeBurgerMenuAction())}>
                    {hasFavs ? <SaveIconNotEmpty /> : <SaveIcon />}
                    <span>Your favorites</span>
                </HeaderNavItem>
            </StyledHeaderMenu>

            <BurgerMenuButton isOpen={isOpen} clickHandler={burgerMenuToogle} />
        </StyledHeaderNav>
    )
}

export default HeaderNav
