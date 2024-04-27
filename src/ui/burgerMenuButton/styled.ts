import { styled } from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledHeaderBurger = styled.div<{ $open: boolean }>`
    cursor: pointer;
    display: none;
    margin: 0 0 0 20px;
    z-index: 90;
    width: 60px;
    height: 60px;
    position: relative;
    transition: all linear 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    span,
    span::before,
    span::after {
        width: 60px;
        height: 3px;
        border-radius: 10px;
        transition: all linear 0.2s;
        background-color: ${palette.ORANGE_COLOR};
    }

    span::before,
    span::after {
        content: '';
        position: absolute;
    }

    span {
        ${props => props.$open && 'background: rgba(0, 0, 0, 0.0);'}
        display: block;
        transform: translateY(25px);

        &::before {
            top: ${props => (props.$open ? '0px' : '-18px')};
            transform: ${props => (props.$open ? 'rotate(-45deg)' : '')};
        }

        &::after {
            top: ${props => (props.$open ? '0px' : '18px')};
            transform: ${props => (props.$open ? 'rotate(45deg)' : '')};
        }
    }

    @media screen and (max-width: 780px) {
        display: block;
    }
`
