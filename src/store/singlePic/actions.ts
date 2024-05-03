import { SinglePictureResponseType } from '@customTypes/singlePicture'
import { AppThunk } from 'store'
import { SinglePicActionType } from './types'
import { getPicById } from '@utils/api/getPicById'

export const setSinglePicAction = (response: SinglePictureResponseType): SinglePicActionType => {
    return {
        type: 'SET_SINGLE_PIC',
        payload: response,
    }
}

export const loadSinglePic = (id: number): AppThunk => {
    return async dispatch => {
        const response = await getPicById(id)
        dispatch(setSinglePicAction(response))
    }
}
