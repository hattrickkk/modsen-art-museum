import React, { useEffect, useState } from 'react'
import { StyledContainer } from '@styles/styles'
import SectionTitle from '@ui/sectionTitle/SectionTitle'
import { StyledOtherWorksSection } from './styled'
import CardsContainer from '@components/cardsContainer'
import Loader from '@ui/loader/Loader'
import { getPics } from '@utils/api/getPics'
import { PicType } from '@customTypes/picture'
import { getPicItem } from '@utils/getPicItem'

const OtherWorksSection = () => {
    const [otherPics, setOtherPics] = useState<PicType[]>([])

    useEffect(() => {
        getPics(9)
            .then(res => getPicItem(res))
            .then(res => setOtherPics(res))
    }, [])

    return (
        <StyledOtherWorksSection>
            <StyledContainer>
                <SectionTitle title='Other works for you' subtitle='Here some more' />
                {!otherPics.length ? <Loader /> : <CardsContainer list={otherPics} big={false} />}
            </StyledContainer>
        </StyledOtherWorksSection>
    )
}

export default OtherWorksSection
