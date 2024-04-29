import { useNavigate } from 'react-router-dom'
import { MouseEvent } from 'react'

type ReturnTypeHook = (e: MouseEvent<HTMLDivElement>) => void

export const useNavigateToSinglePage = (id: number): ReturnTypeHook => {
    const navigate = useNavigate()

    const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains('save-button')) {
            e.preventDefault()
            return
        }
        navigate('/picture/' + id)
    }

    return clickHandler
}
