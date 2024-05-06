import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledRadioItem = styled.div<{ $checked: boolean }>`
    font-size: 18px;
    padding: 5px;
    position: relative;

    label {
        cursor: pointer;
        padding: 0 0 0 25px;

        &:before,
        &:after {
            content: '';
            border-radius: 50%;
            position: absolute;
            transition: all linear 0.2s;
        }

        &:before {
            background-color: ${palette.WHITE_COLOR};
            border: 2px solid ${palette.DARK_GRAY_COLOR};
            width: 20px;
            height: 20px;
            top: 5px;
            left: 0;
        }

        ${props =>
            props.$checked &&
            `&:after {
            background-color: ${palette.DARK_ORANGE_COLOR};
            width: 12px;
            height: 12px;
            top: 9px;
            left: 4px;
        }`}
    }

    input {
        display: none;
    }

    &:not(:last-child) {
        margin: 0 30px 0 0;
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_NORMAL} {
        font-size: 20px;
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_SMALL} {
        flex: 0 1 100%;
        &:not(:last-child) {
            margin: 0 0 10px 0;
        }
    }
`
