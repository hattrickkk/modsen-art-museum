import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledCardDescriptionWrapper = styled.div`
    flex: 1 1 200px;
    align-self: center;
`

export const StyledSmallCardWrapper = styled.div`
    flex: 0 1 33%;
    height: 100%;
    padding: 0 4px;

    &:nth-child(3n-1):last-child {
        margin: 0 auto 0 5px;
    }

    @media ${breakpoints.MEDIA_QUERY_LARGE_RANGE} {
        flex: 0 1 50%;
        padding: 0 8px;

        &:last-child:nth-child(odd) {
            flex: 0 1 70%;
            margin: 0 auto;
        }

        &:last-child:nth-child(even) {
            margin: 0;
        }
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_NORMAL} {
        flex: 0 1 100%;
        padding: 0;
    }
`

export const StyledSmallCard = styled.div`
    border: 2px solid ${palette.GRAY_COLOR};
    padding: 16px;
    margin: 0 0 16px 0;
    background-color: ${palette.WHITE_COLOR};
    cursor: pointer;
`

export const StyledImageWrapper = styled.div<{ $outline: boolean }>`
    width: 90px;
    height: 80px;
    padding: 0 10px 0 0;
    overflow: hidden;

    img {
        border: ${props => (props.$outline ? `2px solid ${palette.ORANGE_COLOR}` : '')};
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
        width: 135px;
        height: 115px;
        padding: 0 17px 0 0;
    }

    @media ${breakpoints.MEDIA_QUERY_MEDIUM_RANGE} {
        display: none;
    }

    @media ${breakpoints.MEDIA_QUERY_PHONE_SMALL} {
        display: none;
    }
`
