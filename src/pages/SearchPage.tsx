import SearchResults from '@components/searchresults'
import { AppState } from '@store/index'
import { StyledContainer, StyledEmptyPageText, StyledPage } from '@styles/styles'
import Title from '@ui/title/Title'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as paths from '@constants/paths'

const SearchPage = () => {
    const searchResults = useSelector((state: AppState) => state.search.list)
    return (
        <StyledPage>
            <Title>
                here are <span> the results</span> for your request
            </Title>

            {searchResults.length ? (
                <SearchResults />
            ) : (
                <StyledContainer>
                    <StyledEmptyPageText>
                        Nothing found. You can search for paintings on the <Link to={paths.HOME_PAGE}>home page</Link>.
                    </StyledEmptyPageText>
                </StyledContainer>
            )}
        </StyledPage>
    )
}

export default SearchPage
