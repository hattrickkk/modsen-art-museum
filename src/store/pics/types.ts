import { PicType, ResponseType } from '@models/types'

export type PicsStateType = {
    pics: PicType[]
    otherPics: PicType[]
}

export type PicsActionType = {
    type: string
    payload: ResponseType
}
