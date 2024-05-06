import { AppDispatch } from 'store'
import { SearchActionType } from './types'
import { getSearchResults } from '@utils/api/getSearchResults'
import { SET_EMPTY_SEARCH_RESULTS, SET_SEARCH_RESULTS } from '@constants/actionNames'
import { SearchResponseType } from '@customTypes/search'
import { SortParamsType } from '@customTypes/sort'
import { DIRECTION_FILTERS_NAMES, INIT_SORT_PARAMS_VALUE } from '@constants/sort'
import { searchResultsSort } from '@utils/searchResultsSort'

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

export const loadSearchResults = (
    search: string,
    currentPage: number,
    sortOptions: SortParamsType = INIT_SORT_PARAMS_VALUE
) => {
    return async (dispatch: AppDispatch) => {
        const response = await getSearchResults(search, currentPage)
        try {
            searchResultsSort(
                sortOptions.filter,
                response.data,
                sortOptions.direction === DIRECTION_FILTERS_NAMES.ascending
            )
            dispatch(setSearchResultscAction(response as SearchResponseType, search))
        } catch (error) {
            dispatch(setEmptyResultscAction())
        }
    }
}
