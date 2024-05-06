import OtherWorksSection from '@components/otherWorksSection'
import { StyledPage } from '@styles/styles'
import React from 'react'
import Title from '@ui/title'
import GallerySection from '@components/gallerySection'
import SearchBlock from '@components/searchBlock'

const HomePage = () => {
    return (
        <StyledPage>
            <Title>
                let's find some <span>Art</span> here!
            </Title>
            <SearchBlock />
            <GallerySection />
            <OtherWorksSection />
        </StyledPage>
    )
}

export default HomePage
