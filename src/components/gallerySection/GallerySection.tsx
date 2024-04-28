import React from 'react'
import { StyledGallerySection } from './styled'
import Cards from '@components/cards/Cards'
import { StyledContainer } from '@styles/styles'
import SectionTitle from '@ui/sectionTitle/SectionTitle'

const GallerySection = () => {
    return (
        <StyledGallerySection>
            <StyledContainer>
                <SectionTitle title='Our special gallery' subtitle='Topics for you' />
                <Cards isForBigCards />
            </StyledContainer>
        </StyledGallerySection>
    )
}

export default GallerySection
