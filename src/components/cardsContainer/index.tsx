import Card from '@components/card'
import SmallCard from '@components/smallCard'
import { PicType } from '@customTypes/picture'
import { FlexContainer } from '@styles/flexStyles'
import React from 'react'

type PropsType = {
    big: boolean
    list: PicType[]
}

const CardsContainer = ({ list, big }: PropsType) => {
    return (
        <FlexContainer $gap={big ? 30 : 8}>
            {list.map(el => (big ? <Card key={el.id} item={el} /> : <SmallCard key={el.id} item={el} />))}
        </FlexContainer>
    )
}

export default CardsContainer
