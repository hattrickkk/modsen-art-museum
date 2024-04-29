import Card from '@components/card/Card'
import SmallCard from '@components/smallCard/SmallCard'
import { PicType } from '@models/picture'
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
