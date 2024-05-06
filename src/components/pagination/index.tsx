import { getPages } from '@utils/pagination/getPages'
import React, { memo, useMemo } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import {
    StyledPagination,
    StyledPaginationArrowWrapper,
    StyledPaginationItem,
    StyledPaginationPagesContainer,
} from './styled'
import PaginationArrow from '@ui/paginationArrow'
import { PAGINATION_DELIMITER } from '@constants/dataConstants'

type PropsType = {
    currentPage: number
    pagesCount: number
    path: string
}

const Pagination = ({ currentPage, pagesCount, path }: PropsType) => {
    if (pagesCount === 1) return null
    const navigate = useNavigate()
    const pages = useMemo(() => getPages(currentPage, pagesCount), [pagesCount, currentPage])

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
                        {el === PAGINATION_DELIMITER ? <span>{PAGINATION_DELIMITER}</span> : <NavLink to={`${path}${el}`}>{el}</NavLink>}
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

export default memo(Pagination)
