import { StyledButton } from '@ui/button/styled'
import React, { memo } from 'react'
import { StyledSaveButton } from './styled'
import SaveIcon from '@ui/saveIcon/SaveIcon'

type PropsType = {
    onClick: () => void
    isFav: boolean
}

const SaveButton = ({ onClick, isFav }: PropsType) => {
    return (
        <StyledSaveButton onClick={onClick} $faved={isFav} className='save-button'>
            <SaveIcon/>
        </StyledSaveButton>
    )
}

export default memo(SaveButton)
