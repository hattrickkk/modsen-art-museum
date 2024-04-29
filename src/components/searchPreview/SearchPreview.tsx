import SmallCard from '@components/smallCard/SmallCard'
import { AppDispatch, AppState } from '@store/index'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledPreviewWrapper } from './styled'
import { hideSearchPreviewAction, showSearchPreciewAction } from '@store/searchPreview/actions'

const SearchPreview = () => {
    const search = useSelector((state: AppState) => state.search.list)
    const isSearchPreviewOpen = useSelector((state: AppState) => state.searchPreview.isOpen)
    const dispath = useDispatch<AppDispatch>()

    useEffect(() => {
        dispath(search.length ? showSearchPreciewAction() : hideSearchPreviewAction())
    }, [search])

    if (search.length) {
        return (
            <StyledPreviewWrapper className='preview' $open={isSearchPreviewOpen}>
                {search.map(el => (
                    <SmallCard key={el.id} item={el} />
                ))}
            </StyledPreviewWrapper>
        )
    }
}

export default SearchPreview
