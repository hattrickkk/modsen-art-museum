import { AppDispatch } from 'store'
import { SearchActionType } from './types'
import { getSearchResults } from '@utils/api/getSearchResults'
import { SET_EMPTY_SEARCH_RESULTS, SET_SEARCH_RESULTS } from '@constants/actionNames'
import { SearchResponseType } from '@customTypes/search'

export const setSearchResultscAction = (response: SearchResponseType, searchText: string): SearchActionType => {
    return {
        type: SET_SEARCH_RESULTS,
        payload: {
            response,
            searchText,
        },
    }
}

export const setEmptyResultscAction = (): SearchActionType => {
    return {
        type: SET_EMPTY_SEARCH_RESULTS,
    }
}

export const loadSearchResults = (search: string, currentPage: number) => {
    return async (dispatch: AppDispatch) => {
        const response = await getSearchResults(search, currentPage)
        try {
            dispatch(setSearchResultscAction(response as SearchResponseType, search))
        } catch (error) {
            dispatch(setEmptyResultscAction())
        }
    }
}
