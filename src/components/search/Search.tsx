import { Field, Form, Formik } from 'formik'
import React, { ChangeEvent } from 'react'
import { StyledFormWrapper, StyledInputWrapper } from './styled'
import SearchInput from '@ui/searchInput/SearchInput'
import SearchIcon from '@ui/searchIcon/SearchIcon'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@store/index'
import { validationSchema } from '@utils/validation/validationSchema'
import { loadSearchResults } from '@store/search/actions'
import { useNavigate } from 'react-router-dom'
import { debounce } from '@utils/debounce'

const Search = () => {
    const dispath = useDispatch<AppDispatch>()
    const navigate = useNavigate()

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
        <Formik validationSchema={validationSchema} initialValues={{ search: '' }} onSubmit={handleSubmit}>
            {({ errors, handleChange, values }) => (
                <StyledFormWrapper>
                    <Form>
                        <span>{errors.search}</span> <br />
                        <StyledInputWrapper>
                            <Field name='search'>
                                {() => (
                                    <SearchInput
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
    )
}

export default Search
