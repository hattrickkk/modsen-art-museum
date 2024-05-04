import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledDescription = styled.div`
    background-color: ${palette.WHITE_COLOR};
`

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

    @media ${breakpoints.MEDIA_QUERY_DESKTOP} {
        max-width: ${props => (props.$small ? 'calc(100% - 60px)' : 'calc(100% - 70px)')};
    }

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
        max-width: calc(100% - 85px);
    }

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
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

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
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

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
        margin: 16px 0 0 0;
    }
`
