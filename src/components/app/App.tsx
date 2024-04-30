import AppRoutes from '@components/appRoutes/AppRoutes'
import { AppDispatch, AppState } from '@store/index'
import { hideSearchPreviewAction } from '@store/searchPreview/actions'
import { GlobalStyles } from '@styles/global'
import { NullStyles } from '@styles/nullStyles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const App = () => {
    const isBurgerMenuOpen = useSelector((state: AppState) => state.burgerMenu.isOpen)
    const isSearchPreviewOpen = useSelector((state: AppState) => state.searchPreview.isOpen)
    const dispath = useDispatch<AppDispatch>()

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        if (isSearchPreviewOpen) {
            if (!(e.target as HTMLElement).closest('.preview') && !(e.target as HTMLElement).closest('.search-input')) {
                dispath(hideSearchPreviewAction())
            }
        }
    }

    return (
        <div onClick={clickHandler}>
            <NullStyles />
            <GlobalStyles $isBurgerMenuOpen={isBurgerMenuOpen} />
            <AppRoutes />
        </div>
    )
}
