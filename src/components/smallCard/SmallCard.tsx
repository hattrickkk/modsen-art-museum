import CardDescription from '@components/cardDescription/CardDescription'
import React from 'react'
import image from '../../assets/image 1.png'
import { Flex, FlexItem } from '@styles/flexStyles'
import { StyledImageWrapper, StyledSmallCard } from './styled'

const SmallCard = () => {
    return (
        <FlexItem $gap={15} $percent={33}>
            <StyledSmallCard>
                <Flex>
                    <StyledImageWrapper>
                        <img src={image} alt='' />
                    </StyledImageWrapper>

                    <CardDescription />
                </Flex>
            </StyledSmallCard>
        </FlexItem>
    )
}

export default SmallCard
