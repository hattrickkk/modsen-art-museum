import React, { memo } from 'react'
import { StyledLoader, StyledLoaderWrapper } from './styled'
import { Flex } from '@styles/flexStyles'

const Loader = () => {
    return (
        <StyledLoaderWrapper>
            <Flex $justifycontent='center'>
                <StyledLoader />
            </Flex>
        </StyledLoaderWrapper>
    )
}

export default memo(Loader)
