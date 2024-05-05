import { BurgerMenuContext } from '@contexts/burgerMenuContext'
import { usecontextValues } from '@utils/hooks/useContextValues'
import React, { ReactNode, useState } from 'react'

const BurgerMenuContextProvider = ({ children }: { children: ReactNode }) => {
    const { isOpen, open, close } = usecontextValues()
    return <BurgerMenuContext.Provider value={{ isOpen, open, close }}>{children}</BurgerMenuContext.Provider>
}

export default BurgerMenuContextProvider
