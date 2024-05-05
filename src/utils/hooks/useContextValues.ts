import { ContextType } from '@customTypes/context'
import { useState } from 'react'

export const usecontextValues = (): ContextType => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const open = () => {
        setIsOpen(true)
    }
    const close = () => {
        setIsOpen(false)
    }

    return {
        isOpen,
        open,
        close,
    }
}
