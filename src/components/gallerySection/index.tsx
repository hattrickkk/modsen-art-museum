import React, { useEffect, useMemo, useState } from 'react'
import { StyledGallerySection } from './styled'
import { StyledContainer } from '@styles/styles'
import SectionTitle from '@ui/sectionTitle'
import CardsContainer from '@components/cardsContainer'
import Loader from '@ui/loader'
import { useParams } from 'react-router-dom'
import Pagination from '@components/pagination'
import * as paths from '@constants/paths'
import { PicType } from '@customTypes/picture'
import { getPics } from '@utils/api/getPics'
import { getPicItem } from '@utils/getPicItem'
import NoResultsFound from '@ui/noResultsfound'

const GallerySection = () => {
    const { pageNumber } = useParams()
    const currentPage: number = useMemo(() => (pageNumber ? +pageNumber : 1), [pageNumber])
    const [totalPages, setTotalPages] = useState<number>(1)
    const [pics, setPics] = useState<PicType[]>([])
    const [hasErrors, setHasErrors] = useState<boolean>(false)

    useEffect(() => {
        getPics(3, currentPage)
            .then(res => {
                setTotalPages(res.pagination.total_pages)
                return getPicItem(res)
            })
            .then(res => setPics(res))
            .catch(() => setHasErrors(true))
    }, [currentPage])

    return (
        <StyledGallerySection>
            <StyledContainer>
                <SectionTitle title='Our special gallery' subtitle='Topics for you' />
                {hasErrors ? (
                    <NoResultsFound />
                ) : !pics.length ? (
                    <Loader />
                ) : (
                    <>
                        <CardsContainer list={pics} big={true} />
                        <Pagination currentPage={currentPage} pagesCount={totalPages} path={paths.HOME_PAGE} />
                    </>
                )}
            </StyledContainer>
        </StyledGallerySection>
    )
}

export default GallerySection
