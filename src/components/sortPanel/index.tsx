import React, { memo, useCallback } from 'react'
import { StyledSortFilters, StyledSortFiltersTitle, StyledSortFiltersWrapper, StyledSortPanel } from './styled'
import RadioItem from '@ui/radioItem'
import { FilterDirectionstype, FilterFieldsType, SortParamsType } from '@customTypes/sort'
import {
    FILTERS_DIRECTIONS_ARR,
    FILTERS_FIRELDS_ARR,
    SORT_FILTER_DIRECTION_NAME,
    SORT_FILTER_FIELD_NAME,
} from '@constants/sort'

type PropsType = {
    setSortParams: React.Dispatch<React.SetStateAction<SortParamsType>>
    sortParams: SortParamsType
}

const SortPanel = ({ setSortParams, sortParams }: PropsType) => {
    const radioItemClick = useCallback(
        (name: keyof SortParamsType, value: FilterFieldsType | FilterDirectionstype) => {
            if (name === SORT_FILTER_DIRECTION_NAME) {
                if (sortParams.direction === value) return
                setSortParams(prev => {
                    return {
                        ...prev,
                        direction: value as FilterDirectionstype,
                    }
                })
            } else if (name === SORT_FILTER_FIELD_NAME) {
                if (sortParams.filter === value) return
                setSortParams(prev => {
                    return {
                        ...prev,
                        filter: value as FilterFieldsType,
                    }
                })
            }
        },
        [sortParams]
    )

    return (
        <StyledSortPanel>
            <StyledSortFiltersWrapper>
                <StyledSortFilters>
                    <StyledSortFiltersTitle>Filters</StyledSortFiltersTitle>
                    {FILTERS_FIRELDS_ARR.map((el, i) => (
                        <RadioItem
                            key={i}
                            checked={sortParams.filter === el}
                            id={`${SORT_FILTER_FIELD_NAME}${i}`}
                            name={SORT_FILTER_FIELD_NAME}
                            value={el}
                            onClick={() => radioItemClick(SORT_FILTER_FIELD_NAME, el)}
                        />
                    ))}
                </StyledSortFilters>
            </StyledSortFiltersWrapper>
            <StyledSortFiltersWrapper>
                <StyledSortFilters>
                    <StyledSortFiltersTitle>Direction</StyledSortFiltersTitle>
                    {FILTERS_DIRECTIONS_ARR.map((el, i) => (
                        <RadioItem
                            key={i}
                            checked={sortParams.direction === el}
                            id={`${SORT_FILTER_DIRECTION_NAME}${i}`}
                            name={SORT_FILTER_DIRECTION_NAME}
                            value={el}
                            onClick={() => radioItemClick(SORT_FILTER_DIRECTION_NAME, el)}
                        />
                    ))}
                </StyledSortFilters>
            </StyledSortFiltersWrapper>
        </StyledSortPanel>
    )
}

export default memo(SortPanel)
