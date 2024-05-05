import { ResponseType } from '@customTypes/picture'
import { AppDispatch } from 'store'
import { SearchActionType } from './types'
import { getSearchResults } from '@utils/api/getSearchResults'
import { SET_SEARCH_RESULTS } from '@constants/actionNames'

export const setSearchResultscAction = (response: ResponseType, searchText: string): SearchActionType => {
    return {
        type: SET_SEARCH_RESULTS,
        payload: {
            response,
            searchText,
        },
    }
}

export const loadSearchResults = (search: string, currentPage: number) => {
    return async (dispatch: AppDispatch) => {
        const response = await getSearchResults(search, currentPage)
        dispatch(setSearchResultscAction(response, search))
    }
}
