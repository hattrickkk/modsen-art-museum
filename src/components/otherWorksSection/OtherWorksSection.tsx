import SmallCard from '@components/smallCard/SmallCard'
import { FlexContainer } from '@styles/flexStyles'
import { StyledContainer } from '@styles/styles'
import SectionTitle from '@ui/sectionTitle/SectionTitle'
import React from 'react'
import { StyledOtherWorksSection } from './styled'

const OtherWorksSection = () => {
    return (
        <StyledOtherWorksSection>
            <StyledContainer>
                <SectionTitle title='Other works for you' subtitle='Here some more' />
                <FlexContainer $gap={15}>
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                </FlexContainer>
            </StyledContainer>
        </StyledOtherWorksSection>
    )
}

export default OtherWorksSection
