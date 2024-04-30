import CardsContainer from '@components/cardsContainer/CardsContainer'
import { AppState } from '@store/index'
import { StyledContainer } from '@styles/styles'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledSearchResultsWrapper } from './styled'

const SearchResults = () => {
    const searchResults = useSelector((state: AppState) => state.search.list)

    return (
        <StyledSearchResultsWrapper>
            <StyledContainer>
                <CardsContainer big={false} list={searchResults} />
            </StyledContainer>
        </StyledSearchResultsWrapper>
    )
}

export default SearchResults
