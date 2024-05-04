import { styled } from 'styled-components'
import * as breakpoints from '@constants/breakpoints'

export const StyledFavoritesSection = styled.section`
    margin: 120px 0;

    @media ${breakpoints.MEDIA_QUERY_TABLET_EXTRA_LARGE} {
        margin: 90px 0;
    }
`
export const StyledFavoritesButtonWrapper = styled.div`
    padding: 20px 0 40px 0;
    display: flex;
	justify-content: flex-end;
`
