import { PaginationType, PicType, ResponseType } from '@customTypes/picture'

export type PicsStateType = {
    list: PicType[]
    totalPages: number
}

export type PicsActionType = {
    type: string
    payload: ResponseType
}
