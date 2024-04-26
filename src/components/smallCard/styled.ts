import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledSmallCard = styled.div`
    border: 1px solid ${palette.GRAY_COLOR};
    padding: 16px;
`

export const StyledImageWrapper = styled.div`
    max-width: 80px;
    padding: 0 8px 0 0;
    img {
        width: 100%;
        object-fit: cover;
    }
`
