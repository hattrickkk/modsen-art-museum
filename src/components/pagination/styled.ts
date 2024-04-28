import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'

export const StyledPagination = styled.div`
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 1212px) {
        justify-content: space-between;
    }

    @media screen and (max-width: 710px) {
        flex-wrap: wrap;
    }
`

export const StyledPaginationPagesContainer = styled.div`
    margin: 0 20px;
    display: flex;

    @media screen and (max-width: 1212px) {
        width: 100%;
        justify-content: space-between;
    }

    @media screen and (max-width: 710px) {
        flex: 1 1 100%;
        margin: 0 0 35px 0;
    }

    @media screen and (max-width: 615px) {
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

    @media screen and (max-width: 1212px) {
        transform: scale(1.4);
    }

    @media screen and (max-width: 710px) {
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
