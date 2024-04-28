import React, { useEffect, useState } from 'react'
import { StyledGallerySection } from './styled'
import { StyledContainer } from '@styles/styles'
import SectionTitle from '@ui/sectionTitle/SectionTitle'
import CardsContainer from '@components/cardsContainer/CardsContainer'
import Loader from '@ui/loader/Loader'
import { AppDispatch, AppState } from '@store/index'
import { loadPics } from '@store/pics/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const GallerySection = () => {
    const dispath = useDispatch<AppDispatch>()
    const pics = useSelector((state: AppState) => state.pics.list)

    const { pageNumber } = useParams()
    const [currentPage, setCurrentPage] = useState<number>(pageNumber ? +pageNumber : 1)

    useEffect(() => {
        dispath(loadPics(currentPage))
    }, [])

    useEffect(() => {
        setCurrentPage(pageNumber ? +pageNumber : 1)
    }, [pageNumber])

    return (
        <StyledGallerySection>
            <StyledContainer>
                <SectionTitle title='Our special gallery' subtitle='Topics for you' />
                {!pics.length ? <Loader /> : <CardsContainer list={pics} big={true} />}
            </StyledContainer>
        </StyledGallerySection>
    )
}

export default GallerySection
