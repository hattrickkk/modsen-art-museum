import React, { useEffect } from 'react'
import { StyledContainer } from '@styles/styles'
import SectionTitle from '@ui/sectionTitle/SectionTitle'
import { StyledOtherWorksSection } from './styled'
import { AppDispatch, AppState } from '@store/index'
import { loadOtherPics } from '@store/otherPics/actions'
import { useDispatch, useSelector } from 'react-redux'
import CardsContainer from '@components/cardsContainer/CardsContainer'
import Loader from '@ui/loader/Loader'

const OtherWorksSection = () => {
    const dispath = useDispatch<AppDispatch>()

    const otherPics = useSelector((state: AppState) => state.otherPics.list)

    useEffect(() => {
        dispath(loadOtherPics())
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
