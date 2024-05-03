import { PicType, ResponseType } from '@customTypes/picture'

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
