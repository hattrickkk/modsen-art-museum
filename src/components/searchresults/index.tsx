import CardsContainer from '@components/cardsContainer'
import { AppDispatch, AppState } from '@store/index'
import { StyledContainer } from '@styles/styles'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledSearchResultsWrapper } from './styled'
import { useParams } from 'react-router-dom'
import { loadSearchResults } from '@store/search/actions'
import Pagination from '@components/pagination'
import * as paths from '@constants/paths'
import { COUNT_OF_AVAILABLE_SEARCH_RESULTS_PAGES } from '@constants/magicNumbers'
import SortPanel from '@components/sortPanel'
import { SortParamsType } from '@customTypes/sort'
import { INIT_SORT_PARAMS_VALUE } from '@constants/sort'

const SearchResults = () => {
    const dispath = useDispatch<AppDispatch>()
    const searchResults = useSelector((state: AppState) => state.search.list)
    const totalPages = useSelector((state: AppState) => state.search.totalPages)
    const searchText = useSelector((state: AppState) => state.search.searchText)

    const { searchPageNumber } = useParams()
    const currentPage: number = useMemo(() => (searchPageNumber ? +searchPageNumber : 1), [searchPageNumber])

    const [sortParams, setSortParams] = useState<SortParamsType>(INIT_SORT_PARAMS_VALUE)
    useEffect(() => {
        dispath(loadSearchResults(searchText, currentPage, sortParams))
    }, [currentPage, sortParams])

    return (
        <StyledSearchResultsWrapper>
            <StyledContainer>
                <SortPanel setSortParams={setSortParams} sortParams={sortParams} />
                <CardsContainer big={false} list={searchResults} />
                <Pagination
                    currentPage={currentPage}
                    pagesCount={
                        totalPages < COUNT_OF_AVAILABLE_SEARCH_RESULTS_PAGES
                            ? totalPages
                            : COUNT_OF_AVAILABLE_SEARCH_RESULTS_PAGES
                    }
                    path={paths.SEARCH_PAGE}
                />
            </StyledContainer>
        </StyledSearchResultsWrapper>
    )
}

export default SearchResults
