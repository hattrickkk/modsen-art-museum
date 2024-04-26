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

const CardDescription = () => {
    return (
        <StyledDescription>
            <Flex>
                <Flex $justifycontent='center' $alignitems='center'>
                    <StyledTextContainer>
                        <StyledTitle>Charles V, bust length dcascas</StyledTitle>
                        <StyledParagraph>Giovanni Britto</StyledParagraph>
                        <StyledAvailabilityInfo>Public</StyledAvailabilityInfo>
                    </StyledTextContainer>
                    <StyledIcon>
                        <SaveIcon />
                    </StyledIcon>
                </Flex>
            </Flex>
        </StyledDescription>
    )
}

export default CardDescription
