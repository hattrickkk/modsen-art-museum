import React, { ChangeEvent, memo, useCallback, useContext, useEffect, useMemo, useRef } from 'react'
import { StyledContainer } from '@styles/styles'
import {
    StyledFormWrapper,
    StyledInputWrapper,
    StyledPreviewViewAll,
    StyledPreviewWrapper,
    StyledSearchBlock,
    StyledSearchBlockWrapper,
    StyledSearchInput,
} from './styled'
import SmallCard from '@components/smallCard'
import { AppState, AppDispatch } from '@store/index'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@ui/searchIcon'
import { validationSchema } from '@utils/validation/validationSchema'
import { Formik, Field, Form } from 'formik'
import { loadSearchResults } from '@store/search/actions'
import { debounce } from '@utils/debounce'
import * as paths from '@constants/paths'
import { SearchPreviewContext } from '@contexts/searchPreviewContext'

const SearchBlock = () => {
    const search = useSelector((state: AppState) => state.search.list)
    const {
        isOpen: isSearchPreviewOpen,
        close: hideSearchPreview,
        open: showSearchPreview,
    } = useContext(SearchPreviewContext)
    const dispath = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const inputRef = useRef<HTMLInputElement>(null)
    const changeSearchPreviewVisibility = useCallback(() => {
        if (inputRef.current) {
            if (inputRef.current.value !== '') {
                search.length ? showSearchPreview() : hideSearchPreview()
            }
        }
    }, [inputRef, search])

    useEffect(() => {
        changeSearchPreviewVisibility()
    }, [search])

    const sendSearchQuery = useCallback((search: string) => {
        dispath(loadSearchResults(search, 1))
    }, [])

    const debouncedSendQuery = useMemo(() => debounce(sendSearchQuery, 500), [sendSearchQuery])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, hasErrors: boolean, value: string) => {
        if (e.target.value.trim() === '') {
            debouncedSendQuery('%E3%85%A4')
        }
        if (!hasErrors) {
            debouncedSendQuery(e.target.value.trim() !== '' ? value : '%E3%85%A4')
        }
    }

    const handleSubmit = (values: { search: string }) => {
        debouncedSendQuery(values.search)
        navigate(`${paths.SEARCH_PAGE}1`)
    }

    return (
        <StyledSearchBlockWrapper>
            <StyledContainer>
                <StyledSearchBlock>
                    <Formik validationSchema={validationSchema} initialValues={{ search: '' }} onSubmit={handleSubmit}>
                        {({ errors, handleChange, values }) => (
                            <StyledFormWrapper>
                                <Form>
                                    <span>{errors.search}</span> <br />
                                    <StyledInputWrapper>
                                        <Field name='search'>
                                            {() => (
                                                <StyledSearchInput
                                                    ref={inputRef}
                                                    className='search-input'
                                                    type='text'
                                                    name='search'
                                                    placeholder='Search art, artist, work...'
                                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                        handleChange(event)
                                                        onChangeHandler(event, !!errors.search, values.search)
                                                    }}
                                                    onClick={changeSearchPreviewVisibility}
                                                />
                                            )}
                                        </Field>
                                        <button type='submit'>
                                            <SearchIcon />
                                        </button>
                                    </StyledInputWrapper>
                                </Form>
                            </StyledFormWrapper>
                        )}
                    </Formik>
                    <StyledPreviewWrapper className='preview' $open={isSearchPreviewOpen}>
                        {search.map(el => (
                            <SmallCard key={el.id} item={el} />
                        ))}
                        <StyledPreviewViewAll onClick={() => navigate(`${paths.SEARCH_PAGE}1`)}>
                            View all...
                        </StyledPreviewViewAll>
                    </StyledPreviewWrapper>
                </StyledSearchBlock>
            </StyledContainer>
        </StyledSearchBlockWrapper>
    )
}

export default memo(SearchBlock)
