import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledPagination = styled.div`
    display: flex;
    justify-content: flex-end;

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
        justify-content: space-between;
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_SMALL} {
        flex-wrap: wrap;
    }
`

export const StyledPaginationPagesContainer = styled.div`
    margin: 0 20px;
    display: flex;

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
        width: 100%;
        justify-content: space-between;
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_SMALL} {
        flex: 1 1 100%;
        margin: 0 0 35px 0;
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_EXTRA_SMALL} {
        flex-wrap: wrap;
    }
`

export const StyledPaginationItem = styled.div<{ $active: boolean }>`
    margin: 0 5px;
    display: flex;
    align-items: center;

    & > * {
        font-weight: 300;
        font-size: 20px;
    }

    & > span {
        letter-spacing: 1.5px;
    }

    a {
        color: ${palette.BLACK_COLOR};
        padding: 7px 10px;
        display: block;
        border-radius: 4px;
        transition: all linear 0.3s;

        ${props =>
            props.$active &&
            `background-color:  ${palette.DARK_ORANGE_COLOR};
            font-weight: 600;
            font-size: 18px;
            color: ${palette.WHITE_COLOR};
		`}
    }
`

export const StyledPaginationArrowWrapper = styled.div`
    display: flex;
    align-items: center;
    transition: all linear 0.3s;
    cursor: pointer;

    @media ${breakpoints.MEDIA_QUERY_DESKTOP_SMALL} {
        transform: scale(1.4);
    }

    @media ${breakpoints.MEDIA_QUERY_TABLET_SMALL} {
        &:first-child {
            margin-right: auto;
            padding: 0 0 0 15px;
        }
        &:last-child {
            margin-left: auto;
            padding: 0 15px 0 0;
        }

        order: 3;
        transform: scale(1.8);
    }
`
