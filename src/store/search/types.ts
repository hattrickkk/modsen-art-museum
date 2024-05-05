import { PicType, ResponseType } from '@customTypes/picture'

export type SearchStateType = {
    list: PicType[]
    totalPages: number
    searchText: string
}

export type SearchActionPayloadType = {
    response: ResponseType
    searchText: string
}

export type SearchActionType = {
    type: string
    payload?: SearchActionPayloadType
}
