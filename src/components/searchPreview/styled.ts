import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledPreviewWrapper = styled.div<{ $open: boolean }>`
    width: 100%;
    background-color: ${palette.DARK_GRAY_COLOR};
    position: absolute;
    padding: 20px 20px 10px;
    border-radius: 16px;
    z-index: 80;
    max-height: 559px;
    overflow-y: scroll;
    margin: 20px 0 0 0;
    display: ${props => (props.$open ? 'block' : 'none')};

    & > *:not(:last-child) {
        margin: 0 0 20px 0;
    }

    @media screen and (max-width: 1212px) {
        max-height: 529px;
    }
`
