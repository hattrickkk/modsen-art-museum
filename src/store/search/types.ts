import { SearchPicType, SearchResponseType } from '@customTypes/search'

export type SearchStateType = {
    list: SearchPicType[]
    totalPages: number
    searchText: string
}

export type SearchActionPayloadType = {
    response: SearchResponseType
    searchText: string
}

export type SearchActionType = {
    type: string
    payload?: SearchActionPayloadType
}
