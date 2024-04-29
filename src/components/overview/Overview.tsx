import React from 'react'
import { StyledOverview, StyledOverviewItem, StyledOverviewMenu, StyledOverviewTitle } from './styled'
import { SinglePicType } from '@models/singlePicture'

type PropsType = {
    item: SinglePicType
}

const Overview = ({ item }: PropsType) => {
    return (
        <StyledOverview>
            <StyledOverviewTitle>Overview</StyledOverviewTitle>
            <StyledOverviewMenu>
                {item.authorNationality && (
                    <StyledOverviewItem>
                        <span>Artist nationality:</span>
                        {item.authorNationality}
                    </StyledOverviewItem>
                )}
                {item.dimensions && (
                    <StyledOverviewItem>
                        <span>Dimensions:</span>
                        {item.dimensions}
                    </StyledOverviewItem>
                )}
                {item.creditLine && (
                    <StyledOverviewItem>
                        <span>Creadit Line:</span>
                        {item.creditLine}
                    </StyledOverviewItem>
                )}
                {item.exhibitionHistory && (
                    <StyledOverviewItem $isBig={!!(item.exhibitionHistory.length > 700)}>
                        <span>Repository:</span>
                        <span>{item.exhibitionHistory}</span>
                    </StyledOverviewItem>
                )}
                <StyledOverviewItem>{item.isPublic ? 'Public' : 'Proprietary'}</StyledOverviewItem>
            </StyledOverviewMenu>
        </StyledOverview>
    )
}

export default Overview
