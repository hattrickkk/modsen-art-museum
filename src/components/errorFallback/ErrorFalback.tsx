import React from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import { StyledErrorFalback, StyledErrorFalbackText, StyledErrorFalbackTitle } from './styled'
import { StyledContainer, StyledPage } from '@styles/styles'
import Button from '@ui/button/Button'

const ErrorFallback = ({ error }: any) => {
    const { resetBoundary } = useErrorBoundary()

    return (
        <StyledPage>
            <StyledContainer>
                <StyledErrorFalback>
                    <StyledErrorFalbackTitle>Oops, something went wrong</StyledErrorFalbackTitle>
                    <StyledErrorFalbackText>{error.message}</StyledErrorFalbackText>
                    <Button onClick={resetBoundary} value='Click to reload page' />
                </StyledErrorFalback>
            </StyledContainer>
        </StyledPage>
    )
}

export default ErrorFallback
