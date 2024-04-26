import { PicType, ResponseType } from '@models/types'

export type PicsStateType = {
    list: PicType[]
}

export type PicsActionType = {
    type: string
    payload: ResponseType
}
