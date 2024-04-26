import CardDescription from '@components/cardDescription/CardDescription'
import React from 'react'
import image from '../../assets/image 1.png'
import { Flex } from '@styles/flexStyles'
import { StyledCardDescriptionWrapper, StyledImageWrapper, StyledSmallCard, StyledSmallCardWrapper } from './styled'

const SmallCard = () => {
    return (
        <StyledSmallCardWrapper>
            <StyledSmallCard>
                <Flex>
                    <StyledImageWrapper>
                        <img src={image} alt='' />
                    </StyledImageWrapper>

                    <StyledCardDescriptionWrapper>
                        <CardDescription small />
                    </StyledCardDescriptionWrapper>
                </Flex>
            </StyledSmallCard>
        </StyledSmallCardWrapper>
    )
}

export default SmallCard
