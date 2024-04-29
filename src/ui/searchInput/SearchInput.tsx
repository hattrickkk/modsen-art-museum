import React, { ChangeEvent } from 'react'
import { StyledSearchInput } from './styled'

type PropsType = {
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ placeholder, onChange }: PropsType) => {
    return <StyledSearchInput type='text' name='search' placeholder={placeholder} onChange={onChange} />
}

export default SearchInput
