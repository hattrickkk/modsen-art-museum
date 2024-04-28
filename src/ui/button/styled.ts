import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledButton = styled.button`
    font-size: 20px;
    padding: 13px 20px;
    border-radius: 5px;
    transition: all linear 0.3s;
    color: ${palette.ORANGE_COLOR};
    background-color: ${palette.WHITE_COLOR};
    border: 3px solid ${palette.ORANGE_COLOR};

    &:hover {
        background-color: ${palette.ORANGE_COLOR};
        color: ${palette.WHITE_COLOR};
    }

    &:active {
        background-color: ${palette.DARK_ORANGE_COLOR};
        border: 3px solid ${palette.DARK_ORANGE_COLOR};
    }
`
