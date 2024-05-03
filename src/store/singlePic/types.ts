import { SinglePicType, SinglePictureResponseType } from 'customTypes/singlePicture'

export type SinglePicStateType = {
    item: SinglePicType
}

export type SinglePicActionType = {
    type: string
    payload: SinglePictureResponseType
}
