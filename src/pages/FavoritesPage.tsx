import React from 'react'
import SaveIcon from '@ui/saveIcon'
import Title from '@ui/title'
import { StyledContainer, StyledEmptyPageText, StyledPage } from '@styles/styles'
import FavoritesSection from '@components/favoritesSection'
import { AppState } from '@store/index'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as paths from '@constants/paths'

const FavoritesPage = () => {
    const favs = useSelector((state: AppState) => state.favs.list)
    return (
        <StyledPage>
            <Title>
                Here are your
                <span>
                    <br />
                    <SaveIcon />
                    <span>favorites</span>
                </span>
            </Title>
            {favs.length ? (
                <FavoritesSection />
            ) : (
                <StyledContainer>
                    <StyledEmptyPageText>
                        You haven't added anything to favorites yet. Do this on the{' '}
                        <Link to={paths.HOME_PAGE}>home page</Link>.
                    </StyledEmptyPageText>
                </StyledContainer>
            )}
        </StyledPage>
    )
}

export default FavoritesPage
