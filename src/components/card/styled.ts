import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledDescriptionWrapper = styled.div`
    max-width: calc(100% - 50px);
    transform: translate(25px, -50%);

    & > div {
        padding: 32px 24px;
        border: 1px solid ${palette.GRAY_COLOR};
    }
`

export const StyledImageContainer = styled.div`
    max-width: 100%;
    img {
        width: 100%;
        object-fit: cover;
    }
`
