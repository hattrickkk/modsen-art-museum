import { ResponseType } from '@models/types'
import { AppThunk } from 'store'
import { getOtherPics } from '@utils/api/getOtherPics'
import { OtherPicsActionType } from './types'

export const setOtherPicsAction = (response: ResponseType): OtherPicsActionType => {
    return {
        type: 'SET_OTHER_PICS',
        payload: response,
    }
}

export const loadPics = (): AppThunk => {
    return async dispatch => {
        const otherPicsResponde = await getOtherPics()
        dispatch(setOtherPicsAction(otherPicsResponde))
    }
}
