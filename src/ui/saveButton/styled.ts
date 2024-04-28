import styled from "styled-components";
import * as palette from '@constants/stylesConstants'

export const StyledSaveButton = styled.div<{ $faved: boolean }>`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: ${props => (props.$faved ? palette.LIGHT_ORANGE_COLOR : palette.GRAY_COLOR)};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
        filter: brightness(90%);
    }
    &:active {
        filter: brightness(80%);
    }

    @media screen and (max-width: 1212px) {
        width: 70px;
        height: 70px;
    }
`
