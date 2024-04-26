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
import { PicType } from '@models/types'

type PropsType = {
    small?: boolean
    item: PicType
}

const CardDescription = ({ small , item}: PropsType) => {
    return (
        <StyledDescription>
            <Flex $alignitems='center'>
                <StyledTextContainer $small={small ? small : false}>
                    <StyledTitle>{item.title}</StyledTitle>
                    <StyledParagraph>{item.author}</StyledParagraph>
                    <StyledAvailabilityInfo>{item.isPublic ? 'Public' : 'Proprietary'}</StyledAvailabilityInfo>
                </StyledTextContainer>
                <StyledIcon>
                    <SaveIcon />
                </StyledIcon>
            </Flex>
        </StyledDescription>
    )
}

export default CardDescription
