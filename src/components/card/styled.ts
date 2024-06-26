import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledCard = styled.div`
    flex: 0 1 33%;
    padding: 0 30px;

    &:last-child {
        margin-right: auto;
    }

    @media ${breakpoints.MEDIA_QUERY_LARGE_RANGE} {
        flex: 0 1 50%;

        &:last-child:nth-child(odd) {
            margin: -25px auto 0;
            flex: 0 1 70%;
        }
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_NORMAL} {
        flex: 0 1 100%;
        padding: 0;

        &:not(:first-child) {
            margin: -20px 0 0 0;
        }
    }
`

export const StyledDescriptionWrapper = styled.div`
    max-width: calc(100% - 50px);
    transform: translate(25px, -50%);
    cursor: pointer;

    & > div {
        padding: 20px 24px;
        border: 2px solid ${palette.GRAY_COLOR};
    }

    @media ${breakpoints.MEDIA_QUERY_PHONE_NORMAL} {
        & > div {
            padding: 20px;
        }
    }
`

export const StyledImageContainer = styled.div<{ $outline: boolean }>`
    width: 100%;
    overflow: hidden;
    height: 470px;
    cursor: pointer;

    border: ${props => (props.$outline ? `4px solid ${palette.ORANGE_COLOR}` : '')};

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
    }
`
