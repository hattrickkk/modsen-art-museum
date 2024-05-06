import { HOME_PAGE } from '@constants/paths'
import { StyledContainer } from '@styles/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Styled404, StyledNotFoundPage, StyledNotFoundPageText, StyledNotFoundPageTitle } from './styled'
import Button from '@ui/button'
import { Flex } from '@styles/flexStyles'

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <StyledNotFoundPage>
            <StyledContainer>
                <Flex $flexdirection='column' $alignitems='center'>
                    <Styled404>404</Styled404>
                    <StyledNotFoundPageTitle>Page not found</StyledNotFoundPageTitle>
                    <StyledNotFoundPageText>You may have followed the wrong link</StyledNotFoundPageText>
                    <Button value='Back to home page' onClick={() => navigate(HOME_PAGE)} />
                </Flex>
            </StyledContainer>
        </StyledNotFoundPage>
    )
}

export default NotFoundPage
