import { SearchPreviewContext } from '@contexts/searchPreviewContext'
import { usecontextValues } from '@utils/hooks/useContextValues'
import React, { ReactNode, useState } from 'react'

const SearchPreviewContextProvider = ({ children }: { children: ReactNode }) => {
    const { isOpen, open, close } = usecontextValues()
    return <SearchPreviewContext.Provider value={{ isOpen, open, close }}>{children}</SearchPreviewContext.Provider>
}

export default SearchPreviewContextProvider
