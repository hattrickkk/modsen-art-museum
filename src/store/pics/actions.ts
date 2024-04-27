import { PicType, ResponseType } from '@models/types'
import { AppThunk } from 'store'
import { PicsActionType } from './types'
import { getPisc } from '@utils/api/getPics'
import { getOtherPics } from '@utils/api/getOtherPics'

export const setPiscAction = (response: ResponseType): PicsActionType => {
    return {
        type: 'SET_PICS',
        payload: response,
    }
}

export const setOtherPicsAction = (response: ResponseType): PicsActionType => {
    return {
        type: 'SET_OTHER_PICS',
        payload: response,
    }
}

export const loadPics = (): AppThunk => {
    return async dispatch => {
        const picsResponse = await getPisc(3)
        dispatch(setPiscAction(picsResponse))

        const otherPicsResponde = await getOtherPics()
        dispatch(setOtherPicsAction(otherPicsResponde))
    }
}
