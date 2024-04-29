import { SinglePicType, SinglePictureResponseType } from "@models/singlePicture"

export type SinglePicStateType = {
    item: SinglePicType
}

export type SinglePicActionType = {
    type: string
    payload: SinglePictureResponseType
}
