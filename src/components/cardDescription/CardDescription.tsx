import React from 'react'
import {
    StyledAvailabilityInfo,
    StyledDescription,
    StyledIcon,
    StyledParagraph,
    StyledTextContainer,
    StyledTitle,
} from './styled'
import { Flex } from '@styles/flexStyles'
import SaveIcon from '@ui/saveIcon/SaveIcon'

type PropsType = {
    small?: boolean
}

const CardDescription = ({ small }: PropsType) => {
    return (
        <StyledDescription>
            <Flex $alignitems='center'>
                <StyledTextContainer $small>
                    <StyledTitle>Charles V, bust length dcas shdi sajs d sdsfdjdsj aso cas</StyledTitle>
                    <StyledParagraph>Giovanni Britto</StyledParagraph>
                    <StyledAvailabilityInfo>Public</StyledAvailabilityInfo>
                </StyledTextContainer>
                <StyledIcon>
                    <SaveIcon />
                </StyledIcon>
            </Flex>
        </StyledDescription>
    )
}

export default CardDescription
