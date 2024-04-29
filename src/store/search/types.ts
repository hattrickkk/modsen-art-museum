import { PaginationType, PicType, ResponseType } from '@models/picture'

export type SearchStateType = {
    list: PicType[]
    totalPages: number
}

export type SearchActionType = {
    type: string
    payload: ResponseType
}
