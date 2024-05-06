import { StyledPage, StyledContainer } from '@styles/styles'
import Button from '@ui/button'
import React, { Component, ReactNode } from 'react'
import { StyledErrorFalback, StyledErrorFalbackText, StyledErrorFalbackTitle } from './styled'
import { Link } from 'react-router-dom'
import { HOME_PAGE } from '@constants/paths'

type PropsType = {
    children?: ReactNode
}

type StateType = {
    hasError: boolean
    errorName: string
    errorMessage: string
}

const initValue: StateType = {
    hasError: false,
    errorName: '',
    errorMessage: '',
}

class ErrorBoundary extends Component<PropsType, StateType> {
    public state: StateType = initValue

    public static getDerivedStateFromError(error: Error): StateType {
        return { hasError: true, errorMessage: error.message, errorName: error.name }
    }

    public render() {
        if (this.state.hasError) {
            return (
                <StyledPage>
                    <StyledContainer>
                        <StyledErrorFalback>
                            <StyledErrorFalbackTitle>Oops, something went wrong</StyledErrorFalbackTitle>
                            <StyledErrorFalbackText>{`${this.state.errorName}: ${this.state.errorMessage}`}</StyledErrorFalbackText>
                            <Link to={HOME_PAGE} onClick={() => this.setState(initValue)}>
                                <Button onClick={() => {}} value='Click to reload page' />
                            </Link>
                        </StyledErrorFalback>
                    </StyledContainer>
                </StyledPage>
            )
        }

        return this.props.children
    }
}
export default ErrorBoundary
