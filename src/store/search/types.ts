import { PaginationType, PicType, ResponseType } from '@models/picture'

export type SearchStateType = {
    list: PicType[]
    totalPages: number
    searchText: string
}

export type SearchActionType = {
    type: string
    payload: {
        response: ResponseType
        searchText: string
    }
}
