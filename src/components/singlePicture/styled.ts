import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledSinglePicture = styled.div`
    display: flex;
    margin: 0 0 120px 0;

    @media ${breakpoints.MEDIA_QUERY_TABLET_LARGE} {
        flex-direction: column;
        margin: 0 0 90px 0;
    }
`

export const StyledSinglePicImageWrapper = styled.div<{ $outline: boolean }>`
    width: 100%;
    overflow: hidden;
    flex: 0 0 450px;
    min-height: 500px;
    position: relative;
    border: ${props => (props.$outline ? `4px solid ${palette.ORANGE_COLOR}` : '')};

    div {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 60px;
        height: 60px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    @media ${breakpoints.MEDIA_QUERY_LAPTOP} {
        flex: 0 0 400px;
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_LARGE} {
        flex: 0 0 500px;
    }
`

export const StyledSinglePicDescriptionWrapper = styled.div`
    flex: 1 1 50%;
    padding: 0 0 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${breakpoints.MEDIA_QUERY_LAPTOP} {
        padding: 0 0 0 55px;
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_EXTRA_LARGE} {
        padding: 0 0 0 40px;
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_LARGE} {
        padding: 40px 0 0 0;
    }
`

export const StyledSinglePicInfo = styled.div`
    @media ${breakpoints.MEDIA_QUERY_TABLET_LARGE} {
        margin: 0 0 80px 0;
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_EXTRA_SMALL} {
        margin: 0 0 50px 0;
    }
`

export const StyledSinglePicTitle = styled.h1`
    font-size: 32px;
    line-height: 38px;
    margin: 0 0 35px 0;
`

export const StyledSinglePicAuthor = styled.p`
    font-size: 24px;
    margin: 0 0 18px 0;
    color: ${palette.ORANGE_COLOR};
`

export const StyledSinglePicDate = styled.p`
    font-weight: 700;
`

export const StyledOverviewTitle = styled.h2`
    font-size: 32px;
    margin: 0 0 35px 0;

    @media ${breakpoints.MEDIA_QUERY_TABLET_EXTRA_SMALL} {
        font-size: 28px;
        margin: 0 0 24px 0;
    }
`

export const StyledOverviewMenu = styled.ul`
    & > *:not(:last-child) {
        margin: 0 0 10px 0;
    }
`

export const StyledOverviewItem = styled.li<{ $isBig?: boolean }>`
    ${props =>
        props.$isBig &&
        `& span:last-child{
            max-height: 150px;
            display: block;
            overflow-y: scroll;
            padding: 0 7px 0 0;
        }`}

    line-height: 18px;
    & span:first-child {
        margin: 0 10px 0 0;
        color: ${palette.ORANGE_COLOR};
    }
`
