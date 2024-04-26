import React, { useEffect, useState } from 'react'
import defaultImage from '@assets/default.svg'
import { StyledCard, StyledDescriptionWrapper, StyledImageContainer } from './styled'
import { Flex } from '@styles/flexStyles'
import CardDescription from '@components/cardDescription/CardDescription'
import { PicType } from '@models/types'

type CardProps = {
    item: PicType
}

const Card = ({ item }: CardProps) => {
    const [imageURL, setImageURL] = useState<null | string>(null)

    useEffect(() => {
        fetch(item.image as string).then(res => setImageURL(res.status === 200 ? item.image : null))
    }, [])

    return (
        <StyledCard>
            <Flex $flexdirection='column'>
                <StyledImageContainer $outline={!imageURL}>
                    <img src={imageURL ? imageURL : defaultImage} alt='' />
                </StyledImageContainer>
                <StyledDescriptionWrapper>
                    <CardDescription item={item}/>
                </StyledDescriptionWrapper>
            </Flex>
        </StyledCard>
    )
}

export default Card
