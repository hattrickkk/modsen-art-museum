import Search from '@components/search/Search'
import React from 'react'
import SearchPreview from '@components/searchPreview/SearchPreview'
import { StyledContainer } from '@styles/styles'
import { StyledSearchBlock, StyledSearchBlockWrapper } from './styled'

const SearchBlock = () => {
    return (
        <StyledSearchBlockWrapper>
            <StyledContainer>
                <StyledSearchBlock>
                    <Search />
                    <SearchPreview />
                </StyledSearchBlock>
            </StyledContainer>
        </StyledSearchBlockWrapper>
    )
}

export default SearchBlock
