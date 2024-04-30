import SmallCard from '@components/smallCard/SmallCard'
import { AppDispatch, AppState } from '@store/index'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledPreviewViewAll, StyledPreviewWrapper } from './styled'
import { hideSearchPreviewAction, showSearchPreciewAction } from '@store/searchPreview/actions'
import { useNavigate } from 'react-router-dom'

const SearchPreview = () => {
    const search = useSelector((state: AppState) => state.search.list)
    const isSearchPreviewOpen = useSelector((state: AppState) => state.searchPreview.isOpen)
    const dispath = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        dispath(search.length ? showSearchPreciewAction() : hideSearchPreviewAction())
    }, [search])

    if (!isSearchPreviewOpen) return null
    return (
        <StyledPreviewWrapper className='preview' $open={isSearchPreviewOpen}>
            {search.map(el => (
                <SmallCard key={el.id} item={el} />
            ))}
            <StyledPreviewViewAll onClick={() => navigate('/search')}>View all...</StyledPreviewViewAll>
        </StyledPreviewWrapper>
    )
}

export default SearchPreview
