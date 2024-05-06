import { FilterDirectionstype, FilterFieldsType, SortParamsType } from '@customTypes/sort'

export const SORT_FILTER_FIELD_NAME: keyof SortParamsType = 'filter'
export const SORT_FILTER_DIRECTION_NAME: keyof SortParamsType = 'direction'

export enum FIELD_FILTERS_NAMES {
    title = 'Title',
    author = 'Author',
    dateStart = 'Date start',
    dateEnd = 'Date end',
}
export enum DIRECTION_FILTERS_NAMES {
    ascending = 'Ascending',
    descending = 'Descending',
}

export const FILTERS_FIRELDS_ARR: FilterFieldsType[] = [
    FIELD_FILTERS_NAMES.title,
    FIELD_FILTERS_NAMES.author,
    FIELD_FILTERS_NAMES.dateStart,
    FIELD_FILTERS_NAMES.dateEnd,
]

export const FILTERS_DIRECTIONS_ARR: FilterDirectionstype[] = [
    DIRECTION_FILTERS_NAMES.ascending,
    DIRECTION_FILTERS_NAMES.descending,
]

export const INIT_SORT_PARAMS_VALUE: SortParamsType = {
    filter: FIELD_FILTERS_NAMES.title,
    direction: DIRECTION_FILTERS_NAMES.ascending,
}
