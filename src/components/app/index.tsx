import AppRoutes from '@components/appRoutes'
import { GlobalStyles } from '@styles/global'
import { NullStyles } from '@styles/nullStyles'
import { BurgerMenuContext } from '@contexts/burgerMenuContext'
import React, { useContext } from 'react'
import { SearchPreviewContext } from '@contexts/searchPreviewContext'

export const App = () => {
    const { isOpen: isBurgerMenuOpen } = useContext(BurgerMenuContext)
    const { isOpen: isSearchPreviewOpen, close: hideSearchPreview } = useContext(SearchPreviewContext)

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        if (isSearchPreviewOpen) {
            if (!(e.target as HTMLElement).closest('.preview') && !(e.target as HTMLElement).closest('.search-input')) {
                hideSearchPreview()
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
