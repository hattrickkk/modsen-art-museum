import { ResponseType } from '@models/types'
import { AppThunk } from 'store'
import { PicsActionType } from './types'
import { getPics } from '@utils/api/getPics'

export const setPiscAction = (response: ResponseType): PicsActionType => {
    return {
        type: 'SET_PICS',
        payload: response,
    }
}

export const loadPics = (currentPage: number): AppThunk => {
    return async dispatch => {
        const picsResponse = await getPics(3, currentPage)
        dispatch(setPiscAction(picsResponse))
    }
}
