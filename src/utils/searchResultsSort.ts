import { FIELD_FILTERS_NAMES } from '@constants/sort'
import { SearchResponsePicType } from '@customTypes/search'
import { FilterFieldsType } from '@customTypes/sort'

export const searchResultsSort = (
    param: FilterFieldsType,
    arr: SearchResponsePicType[],
    isAscending: boolean
): SearchResponsePicType[] => {
    switch (param) {
        case FIELD_FILTERS_NAMES.title:
            return arr.sort((a, b) => {
                return isAscending ? (a.title > b.title ? 1 : -1) : a.title < b.title ? 1 : -1
            })
        case FIELD_FILTERS_NAMES.author:
            return arr.sort((a, b) => {
                const authorA = a.artist_display.split('\n').length !== 1 ? a.artist_display.split('\n')[0] : null
                const authorB = b.artist_display.split('\n').length !== 1 ? b.artist_display.split('\n')[0] : null

                if (typeof authorA === 'string' && typeof authorB === 'string') {
                    return isAscending ? (authorA > authorB ? 1 : -1) : authorA < authorB ? 1 : -1
                }
                if (!!authorA === true && !!authorB === false) return isAscending ? -1 : 1
                if (!!authorA === false && !!authorB === true) return isAscending ? 1 : -1
                return isAscending ? -1 : 1
            })
        case FIELD_FILTERS_NAMES.dateStart:
            return arr.sort((a, b) => {
                return isAscending ? (a.date_start > b.date_start ? 1 : -1) : a.date_start < b.date_start ? 1 : -1
            })
        case FIELD_FILTERS_NAMES.dateEnd:
            return arr.sort((a, b) => {
                return isAscending ? (a.date_end > b.date_end ? 1 : -1) : a.date_end < b.date_end ? 1 : -1
            })
        default:
            return arr
    }
}
