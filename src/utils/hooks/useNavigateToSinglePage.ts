import { useNavigate } from 'react-router-dom'
import { MouseEvent } from 'react'
import * as paths from '@constants/paths'

type ReturnTypeHook = (e: MouseEvent<HTMLDivElement>) => void

export const useNavigateToSinglePage = (id: number): ReturnTypeHook => {
    const navigate = useNavigate()

    const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains('save-button')) {
            e.preventDefault()
            return
        }
        navigate(`${paths.SINGLE_PAGE}${id}`)
    }

    return clickHandler
}
