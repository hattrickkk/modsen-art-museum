import { Flex } from '@styles/flexStyles'
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
import { useSelector } from 'react-redux'
import { AppState } from '@store/index'

type PropsType = {
    currentPage: number
    pagesCount: number
}

const Pagination = ({ currentPage, pagesCount }: PropsType) => {
    const navigate = useNavigate()
    const [pages, setPages] = useState<ReturnType<typeof getPages>>([])
    useEffect(() => {
        setPages(getPages(currentPage, pagesCount))
    }, [pagesCount, currentPage])

    return (
        <StyledPagination>
            {currentPage !== 1 && (
                <StyledPaginationArrowWrapper onClick={() => navigate(`/${currentPage - 1}`)}>
                    <PaginationArrow isBack />
                </StyledPaginationArrowWrapper>
            )}

            <StyledPaginationPagesContainer>
                {pages.map((el, i) => (
                    <StyledPaginationItem key={i} $active={!!(currentPage === el)}>
                        {el === '...' ? <span>{'...'}</span> : <NavLink to={`/${el}`}>{el}</NavLink>}
                    </StyledPaginationItem>
                ))}
            </StyledPaginationPagesContainer>

            {currentPage !== pagesCount && (
                <StyledPaginationArrowWrapper onClick={() => navigate(`/${currentPage + 1}`)}>
                    <PaginationArrow />
                </StyledPaginationArrowWrapper>
            )}
        </StyledPagination>
    )
}

export default Pagination
