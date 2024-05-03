import React, { ChangeEvent, useEffect } from 'react'
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
import { showSearchPreciewAction, hideSearchPreviewAction } from '@store/searchPreview/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@ui/searchIcon/SearchIcon'
import { validationSchema } from '@utils/validation/validationSchema'
import { Formik, Field, Form } from 'formik'
import { loadSearchResults } from '@store/search/actions'
import { debounce } from '@utils/debounce'

const SearchBlock = () => {
    const search = useSelector((state: AppState) => state.search.list)
    const isSearchPreviewOpen = useSelector((state: AppState) => state.searchPreview.isOpen)
    const dispath = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        dispath(search.length ? showSearchPreciewAction() : hideSearchPreviewAction())
    }, [search])

    const sendSearchQuery = (search: string) => {
        dispath(loadSearchResults(search, 1))
    }
    const debouncedSendQuery = debounce(sendSearchQuery, 500)

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
        navigate('/search')
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
                                                    className='search-input'
                                                    type='text'
                                                    name='search'
                                                    placeholder='Search art, artist, work...'
                                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                        handleChange(event)
                                                        onChangeHandler(event, !!errors.search, values.search)
                                                    }}
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
                        <StyledPreviewViewAll onClick={() => navigate('/search')}>View all...</StyledPreviewViewAll>
                    </StyledPreviewWrapper>
                </StyledSearchBlock>
            </StyledContainer>
        </StyledSearchBlockWrapper>
    )
}

export default SearchBlock
