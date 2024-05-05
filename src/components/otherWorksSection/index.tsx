import React, { useEffect, useState } from 'react'
import { StyledContainer } from '@styles/styles'
import SectionTitle from '@ui/sectionTitle/SectionTitle'
import { StyledOtherWorksSection } from './styled'
import CardsContainer from '@components/cardsContainer'
import Loader from '@ui/loader/Loader'
import { getPics } from '@utils/api/getPics'
import { PicType } from '@customTypes/picture'
import { getPicItem } from '@utils/getPicItem'
import NoResultsFound from '@ui/noResultsfound'

const OtherWorksSection = () => {
    const [otherPics, setOtherPics] = useState<PicType[]>([])
    const [hasErrors, setHasErrors] = useState<boolean>(false)

    useEffect(() => {
        getPics(9)
            .then(res => getPicItem(res))
            .then(res => setOtherPics(res))
            .catch(() => setHasErrors(true))
    }, [])

    return (
        <StyledOtherWorksSection>
            <StyledContainer>
                <SectionTitle title='Other works for you' subtitle='Here some more' />
                {hasErrors ? (
                    <NoResultsFound />
                ) : !otherPics.length ? (
                    <Loader />
                ) : (
                    <CardsContainer list={otherPics} big={false} />
                )}
            </StyledContainer>
        </StyledOtherWorksSection>
    )
}

export default OtherWorksSection
