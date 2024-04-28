import { PaginationType, PicType, ResponseType } from '@models/types'

export type PicsStateType = {
    list: PicType[]
    totalPages: number
}

export type PicsActionType = {
    type: string
    payload: ResponseType
}
