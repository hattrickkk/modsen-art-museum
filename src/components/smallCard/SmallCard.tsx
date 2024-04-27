import CardDescription from '@components/cardDescription/CardDescription'
import React, { useEffect, useState } from 'react'
import defaultImage from '@assets/default.svg'
import { Flex } from '@styles/flexStyles'
import { StyledCardDescriptionWrapper, StyledImageWrapper, StyledSmallCard, StyledSmallCardWrapper } from './styled'
import { PicType } from '@models/types'

type PropsType = {
    item: PicType
}

const SmallCard = ({ item }: PropsType) => {
    const [imageURL, setImageURL] = useState<null | string>(null)

    useEffect(() => {
        fetch(item.image as string).then(res => setImageURL(res.status === 200 ? item.image : null))
    }, [])

    return (
        <StyledSmallCardWrapper>
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

export default SmallCard
