import { ContextType } from '@customTypes/context'
import { useCallback, useState } from 'react'

export const usecontextValues = (): ContextType => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const open = useCallback(() => setIsOpen(true), [])
    const close = useCallback(() => setIsOpen(false), [])

    return {
        isOpen,
        open,
        close,
    }
}
