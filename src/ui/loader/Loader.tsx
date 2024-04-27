import React from 'react'
import { StyledLoader } from './styled'
import { ClipLoader } from 'react-spinners'
import * as palette from '@constants/stylesConstants'
import { Flex } from '@styles/flexStyles'

const Loader = () => {
    return (
        <StyledLoader>
            <Flex $justifycontent='center'>
                <ClipLoader color={palette.ORANGE_COLOR} size={150} />
            </Flex>
        </StyledLoader>
    )
}

export default Loader
