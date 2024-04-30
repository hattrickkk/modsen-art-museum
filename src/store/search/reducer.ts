import { SearchActionType, SearchStateType } from './types'

const initValue: SearchStateType = {
    list: [],
    totalPages: 0,
    searchText: '',
}

export const searchReducer = (state: SearchStateType = initValue, action: SearchActionType): SearchStateType => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                list: action.payload.response.data.map(el => ({
                    id: el.id,
                    title: el.title,
                    isPublic: el.is_public_domain,
                    author: el.artist_display.split('\n').length !== 1 ? el.artist_display.split('\n')[0] : null,
                    image: `${action.payload.response.config.iiif_url}/${el.image_id}/full/843,/0/default.jpg`,
                })),
                totalPages: action.payload.response.pagination.total_pages,
                searchText: action.payload.searchText,
            }
        default:
            return state
    }
}
