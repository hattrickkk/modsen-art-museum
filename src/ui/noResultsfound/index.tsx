import React, { memo } from 'react'
import { StyledNoResultsFound } from './styled'
import noResultsFound from '@assets/no-results-found.png'

const NoResultsFound = () => {
    return (
        <StyledNoResultsFound>
            <img src={noResultsFound} alt='no results found' />
        </StyledNoResultsFound>
    )
}

export default memo(NoResultsFound)
