import { ResponseType } from '@models/picture'
import { AppThunk } from 'store'
import { SearchActionType } from './types'
import { getSearchResults } from '@utils/api/getSearchResults'

export const setSearchResultscAction = (response: ResponseType, searchText: string): SearchActionType => {
    return {
        type: 'SET_SEARCH_RESULTS',
        payload: {
            response,
            searchText,
        },
    }
}

export const loadSearchResults = (search: string, currentPage: number): AppThunk => {
    return async dispatch => {
        const response = await getSearchResults(search, currentPage)
        dispatch(setSearchResultscAction(response, search))
    }
}
