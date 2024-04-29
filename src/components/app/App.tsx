import AppRoutes from '@components/appRoutes/AppRoutes'
import { AppState } from '@store/index'
import { GlobalStyles } from '@styles/global'
import { NullStyles } from '@styles/nullStyles'
import React from 'react'
import { useSelector } from 'react-redux'

export const App = () => {
    const isOpen = useSelector((state: AppState) => state.burgerMenu.isOpen)
    return (
        <div>
            <NullStyles />
            <GlobalStyles $isBurgerMenuOpen={isOpen} />
            <AppRoutes />
        </div>
    ) 
}
