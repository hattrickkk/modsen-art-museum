import React, { ReactNode, memo } from 'react'
import { StyledTitle } from './styled'
import { StyledContainer } from '@styles/styles'

type PropsType = {
    children: ReactNode
}

const Title = ({ children }: PropsType) => {
    return (
        <StyledContainer>
            <StyledTitle>{children}</StyledTitle>
        </StyledContainer>
    )
}

export default memo(Title)
