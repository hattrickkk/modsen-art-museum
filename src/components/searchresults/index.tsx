import CardsContainer from '@components/cardsContainer'
import { AppDispatch, AppState } from '@store/index'
import { StyledContainer } from '@styles/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledSearchResultsWrapper } from './styled'
import { useParams } from 'react-router-dom'
import { loadSearchResults } from '@store/search/actions'
import Pagination from '@components/pagination'

const SearchResults = () => {
    const dispath = useDispatch<AppDispatch>()
    const searchResults = useSelector((state: AppState) => state.search.list)
    const totalPages = useSelector((state: AppState) => state.search.totalPages)
    const searchText = useSelector((state: AppState) => state.search.searchText)

    const { searchPageNumber } = useParams()
    const [currentPage, setCurrentPage] = useState<number>(searchPageNumber ? +searchPageNumber : 1)

    useEffect(() => {
        setCurrentPage(searchPageNumber ? +searchPageNumber : 1)
    }, [searchPageNumber])

    useEffect(() => {
        dispath(loadSearchResults(searchText, currentPage))
    }, [currentPage])

    return (
        <StyledSearchResultsWrapper>
            <StyledContainer>
                <CardsContainer big={false} list={searchResults} />
                <Pagination
                    currentPage={currentPage}
                    pagesCount={totalPages < 111 ? totalPages : 111}
                    path={'/search/'}
                />
            </StyledContainer>
        </StyledSearchResultsWrapper>
    )
}

export default SearchResults
