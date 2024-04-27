import React from 'react'
import { StyledContainer } from '@styles/styles'
import SectionTitle from '@ui/sectionTitle/SectionTitle'
import { StyledOtherWorksSection } from './styled'
import Cards from '@components/cards/Cards'

const OtherWorksSection = () => {
    return (
        <StyledOtherWorksSection>
            <StyledContainer>
                <SectionTitle title='Other works for you' subtitle='Here some more' />
                <Cards isForBigCards={false} />
            </StyledContainer>
        </StyledOtherWorksSection>
    )
}

export default OtherWorksSection
