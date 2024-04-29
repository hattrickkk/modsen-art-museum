import React from 'react'
import defaultImage from '@assets/default.svg'
import { StyledCard, StyledDescriptionWrapper, StyledImageContainer } from './styled'
import { Flex } from '@styles/flexStyles'
import CardDescription from '@components/cardDescription/CardDescription'
import { PicType } from '@models/types'
import { useNavigateToSinglePage } from '@utils/hooks/useNavigateToSinglePage'
import { useImage } from '@utils/hooks/useImage'

type CardProps = {
    item: PicType
}

const Card = ({ item }: CardProps) => {
    const imageURL = useImage(item.image as string)
    const navigateToSinglePageById = useNavigateToSinglePage(item.id)
    return (
        <StyledCard>
            <Flex $flexdirection='column'>
                <StyledImageContainer $outline={!imageURL} onClick={navigateToSinglePageById}>
                    <img src={imageURL ? imageURL : defaultImage} alt='' />
                </StyledImageContainer>
                <StyledDescriptionWrapper onClick={navigateToSinglePageById}>
                    <CardDescription item={item} />
                </StyledDescriptionWrapper>
            </Flex>
        </StyledCard>
    )
}

export default Card
