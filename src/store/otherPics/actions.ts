import { ResponseType } from '@customTypes/picture'
import { AppThunk } from 'store'
import { OtherPicsActionType } from './types'
import { getPics } from '@utils/api/getPics'

export const setOtherPicsAction = (response: ResponseType): OtherPicsActionType => {
    return {
        type: 'SET_OTHER_PICS',
        payload: response,
    }
}

export const loadOtherPics = (): AppThunk => {
    return async dispatch => {
        const otherPicsResponde = await getPics(9)
        dispatch(setOtherPicsAction(otherPicsResponde))
    }
}
