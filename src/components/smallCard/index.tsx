import CardDescription from '@components/cardDescription'
import React, { memo } from 'react'
import defaultImage from '@assets/default.svg'
import { Flex } from '@styles/flexStyles'
import { StyledCardDescriptionWrapper, StyledImageWrapper, StyledSmallCard, StyledSmallCardWrapper } from './styled'
import { PicType } from '@customTypes/picture'
import { useNavigateToSinglePage } from '@utils/hooks/useNavigateToSinglePage'
import { useImage } from '@utils/hooks/useImage'

type PropsType = {
    item: PicType
}

const SmallCard = ({ item }: PropsType) => {
    const imageURL = useImage(item.image as string)
    const navigateToSinglePageById = useNavigateToSinglePage(item.id)
    return (
        <StyledSmallCardWrapper onClick={navigateToSinglePageById}>
            <StyledSmallCard>
                <Flex>
                    <StyledImageWrapper $outline={!imageURL}>
                        <img src={imageURL ? imageURL : defaultImage} alt='' />
                    </StyledImageWrapper>

                    <StyledCardDescriptionWrapper>
                        <CardDescription small item={item} />
                    </StyledCardDescriptionWrapper>
                </Flex>
            </StyledSmallCard>
        </StyledSmallCardWrapper>
    )
}

export default memo(SmallCard)
