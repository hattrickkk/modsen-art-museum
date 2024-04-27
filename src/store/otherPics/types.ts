import { PicType, ResponseType } from '@models/types'

export type OtherPicsStateType = {
    otherPics: PicType[]
}

export type OtherPicsActionType = {
    type: string
    payload: ResponseType
}
