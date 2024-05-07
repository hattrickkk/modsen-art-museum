import React, { memo } from 'react'
import { StyledRadioItem } from './styled'

type ProppsType = {
    name: string
    value: string
    id: string
    checked: boolean
    onClick: () => void
}

const RadioItem = ({ name, value, checked, id, onClick }: ProppsType) => {
    return (
        <StyledRadioItem onClick={onClick} $checked={checked} data-testid='radioItem'>
            <input type='radio' name={name} id={id} defaultChecked={checked} />
            <label htmlFor={id}>{value}</label>
        </StyledRadioItem>
    )
}

export default memo(RadioItem)
