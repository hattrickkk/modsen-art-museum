import { PicType, ResponseType } from '@models/picture'

export type OtherPicsStateType = {
    list: PicType[]
}

export type OtherPicsActionType = {
    type: string
    payload: ResponseType
}
