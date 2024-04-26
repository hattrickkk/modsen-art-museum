import React from 'react'
import image from '../../assets/image 1.png'
import { StyledCard, StyledDescriptionWrapper, StyledImageContainer } from './styled'
import { Flex } from '@styles/flexStyles'
import CardDescription from '@components/cardDescription/CardDescription'

type CardProps = {}

const Card = (props: CardProps) => {
    return (
            <StyledCard>
                <Flex $flexdirection='column'>
                    <StyledImageContainer>
                        <img src={image} alt='' />
                    </StyledImageContainer>
                    <StyledDescriptionWrapper>
                        <CardDescription />
                    </StyledDescriptionWrapper>
                </Flex>
            </StyledCard>
    )
}

export default Card
