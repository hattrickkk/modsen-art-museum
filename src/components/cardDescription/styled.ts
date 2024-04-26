import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledDescription = styled.div`
    // border: 1px solid ${palette.GRAY_COLOR};
    background-color: ${palette.WHITE_COLOR};
`

export const StyledIcon = styled.div`
    border-radius: 50%;
    width: 59px;
    height: 59px;
    background-color: ${palette.GRAY_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
        filter: brightness(90%);
    }
`
//
export const StyledTextContainer = styled.div`
    max-width: 220px;
    overflow: hidden;
    line-height: 26px;
    padding: 0 8px 0 0;

    font-size: 15px;
    letter-spacing: -0.01em;

    & > * {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
`
export const StyledTitle = styled.h4`
    font-weight: 500;
    font-size: 17px;
    letter-spacing: -0.03em;
`
export const StyledParagraph = styled.p`
    color: ${palette.ORANGE_COLOR};
`
export const StyledAvailabilityInfo = styled.p`
    margin: 8px 0 0 0;
    font-weight: 700;
`
