import Card from '@components/card'
import SmallCard from '@components/smallCard'
import { BIG_CARD_GAP, SMALL_CARD_GAP } from '@constants/magicNumbers'
import { PicType } from '@customTypes/picture'
import { FlexContainer } from '@styles/flexStyles'
import React from 'react'

type PropsType = {
    big: boolean
    list: PicType[]
}

const CardsContainer = ({ list, big }: PropsType) => {
    return (
        <FlexContainer $gap={big ? BIG_CARD_GAP : SMALL_CARD_GAP}>
            {list.map(el => (big ? <Card key={el.id} item={el} /> : <SmallCard key={el.id} item={el} />))}
        </FlexContainer>
    )
}

export default CardsContainer
