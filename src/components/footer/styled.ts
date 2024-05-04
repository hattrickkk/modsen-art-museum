import styled from 'styled-components'
import * as palette from '@constants/stylesConstants'
import * as breakpoints from '@constants/breakpoints'

export const StyledFooter = styled.footer`
    padding: 32px 0;
    background-color: ${palette.WHITE_COLOR};

    @media ${breakpoints.MEDIA_QUERY_PHONE_NORMAL} {
        padding: 25px 0;
    }
`

export const StyledFooterInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${breakpoints.MEDIA_QUERY_PHONE_NORMAL} {
        flex-direction: column;

        & > a > img {
            display: block;
            max-height: 50px;
        }
        & > a:first-child > img {
            margin: 0 0 30px 0;
        }
    }
`
