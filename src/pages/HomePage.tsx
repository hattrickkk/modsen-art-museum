import OtherWorksSection from '@components/otherWorksSection/OtherWorksSection'
import { StyledContainer, StyledPage } from '@styles/styles'
import React from 'react'
import Title from '@ui/title/Title'
import GallerySection from '@components/gallerySection/GallerySection'
import Search from '@components/search/Search'
import { useSelector } from 'react-redux'
import { AppState } from '@store/index'
import SearchBlock from '@components/searchBlock/SearchBlock'

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
