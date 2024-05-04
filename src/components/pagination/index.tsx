import { getPages } from '@utils/pagination/getPages'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import {
    StyledPagination,
    StyledPaginationArrowWrapper,
    StyledPaginationItem,
    StyledPaginationPagesContainer,
} from './styled'
import PaginationArrow from '@ui/paginationArrow/PaginationArrow'

type PropsType = {
    currentPage: number
    pagesCount: number
    path: string
}

const Pagination = ({ currentPage, pagesCount, path }: PropsType) => {
    const navigate = useNavigate()
    const [pages, setPages] = useState<ReturnType<typeof getPages>>([])
    useEffect(() => {
        setPages(getPages(currentPage, pagesCount))
    }, [pagesCount, currentPage])

    return (
        <StyledPagination>
            {currentPage !== 1 && (
                <StyledPaginationArrowWrapper onClick={() => navigate(`${path}${currentPage - 1}`)}>
                    <PaginationArrow isBack />
                </StyledPaginationArrowWrapper>
            )}

            <StyledPaginationPagesContainer>
                {pages.map((el, i) => (
                    <StyledPaginationItem key={i} $active={!!(currentPage === el)}>
                        {el === '...' ? <span>{'...'}</span> : <NavLink to={`${path}${el}`}>{el}</NavLink>}
                    </StyledPaginationItem>
                ))}
            </StyledPaginationPagesContainer>

            {currentPage !== pagesCount && (
                <StyledPaginationArrowWrapper onClick={() => navigate(`${path}${currentPage + 1}`)}>
                    <PaginationArrow />
                </StyledPaginationArrowWrapper>
            )}
        </StyledPagination>
    )
}

export default Pagination