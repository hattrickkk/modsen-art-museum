import { StyledButton } from '@ui/button/styled'
import React, { memo } from 'react'
import { StyledSaveButton } from './styled'
import SaveIcon from '@ui/saveIcon'

type PropsType = {
    onClick: () => void
    isFav: boolean
}

const SaveButton = ({ onClick, isFav }: PropsType) => {
    return (
        <StyledSaveButton onClick={onClick} $faved={isFav} className='save-button' data-testid='save-button'>
            <SaveIcon />
        </StyledSaveButton>
    )
}

export default memo(SaveButton)
