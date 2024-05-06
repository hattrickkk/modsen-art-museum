import { DIRECTION_FILTERS_NAMES, FIELD_FILTERS_NAMES } from '@constants/sort'

export type FilterFieldsType =
    | FIELD_FILTERS_NAMES.title
    | FIELD_FILTERS_NAMES.author
    | FIELD_FILTERS_NAMES.dateStart
    | FIELD_FILTERS_NAMES.dateEnd

export type FilterDirectionstype = DIRECTION_FILTERS_NAMES.ascending | DIRECTION_FILTERS_NAMES.descending

export type SortParamsType = {
    filter: FilterFieldsType
    direction: FilterDirectionstype
}
