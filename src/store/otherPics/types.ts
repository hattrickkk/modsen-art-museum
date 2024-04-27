import { PicType, ResponseType } from '@models/types'

export type OtherPicsStateType = {
    list: PicType[]
}

export type OtherPicsActionType = {
    type: string
    payload: ResponseType
}
