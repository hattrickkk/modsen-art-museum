import { PicType, ResponseType } from '@models/types'
import { AppThunk } from 'store'
import { PicsActionType } from './types'
import { getPisc } from '@utils/api/getPics'

export const setPiscAction = (response: ResponseType): PicsActionType => {
    return {
        type: 'SET_PICS',
        payload: response,
    }
}

export const loadPics = (): AppThunk => {
    return async dispatch => {
        const response = await getPisc(3)
        dispatch(setPiscAction(response))
    }
}
