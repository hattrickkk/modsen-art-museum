import { PicType, ResponseType } from '@customTypes/picture'

export type OtherPicsStateType = {
    list: PicType[]
}

export type OtherPicsActionType = {
    type: string
    payload: ResponseType
}
