import CardsContainer from '@components/cardsContainer/CardsContainer'
import { PicType } from '@models/types'
import Loader from '@ui/loader/Loader'
import { useLoadPics } from '@utils/hooks/useLoadData'
import React from 'react'

type PropsType = {
    isForBigCards: boolean
}

const Cards = ({ isForBigCards }: PropsType) => {
    const picsList: PicType[] = useLoadPics(isForBigCards)
    return !picsList.length ? <Loader /> : <CardsContainer list={picsList} big={isForBigCards} />
}

export default Cards
