import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledDescription = styled.div`
    background-color: ${palette.WHITE_COLOR};
`

export const StyledIcon = styled.div<{ $faved: boolean }>`
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
//
export const StyledTextContainer = styled.div<{ $small?: boolean }>`
    max-width: 210px;
    overflow: hidden;
    line-height: 26px;
    padding: 0 10px 0 0;

    font-size: 15px;
    letter-spacing: -0.01em;
    font-family: ${props => (props.$small === true ? 'Inter' : '')};

    & > * {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    @media screen and (max-width: 1280px) {
        max-width: ${props => (props.$small ? 'calc(100% - 60px)' : 'calc(100% - 70px)')};
    }

    @media screen and (max-width: 1216px) {
        max-width: calc(100% - 85px);
    }

    @media screen and (max-width: 1212px) {
        & > * {
            font-size: 20px;
            line-height: 35px;
        }
    }
`
export const StyledTitle = styled.h4`
    font-weight: 500;
    font-size: 17px;
    letter-spacing: -0.03em;

    @media screen and (max-width: 1212px) {
        font-size: 20px;
    }
`
export const StyledParagraph = styled.p`
    color: ${palette.ORANGE_COLOR};
`
export const StyledAvailabilityInfo = styled.p`
    margin: 8px 0 0 0;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 1212px) {
        margin: 16px 0 0 0;
    }
`
