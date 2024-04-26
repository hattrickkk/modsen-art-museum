import React from 'react'
import image from '../../assets/image 1.png'
import { StyledDescriptionWrapper, StyledImageContainer } from './styled'
import { Flex, FlexItem } from '@styles/flexStyles'
import CardDescription from '@components/cardDescription/CardDescription'

type CardProps = {}

const Card = (props: CardProps) => {
    return (
        <FlexItem $gap={15} $percent={33}>
            <Flex $flexdirection='column'>
                <StyledImageContainer>
                    <img src={image} alt='' />
                </StyledImageContainer>
                <StyledDescriptionWrapper>
                    <CardDescription />
                </StyledDescriptionWrapper>
            </Flex>
        </FlexItem>
    )
}

export default Card
