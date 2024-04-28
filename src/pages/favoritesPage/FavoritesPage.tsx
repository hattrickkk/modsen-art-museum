import React from 'react'
import SaveIcon from '@ui/saveIcon/SaveIcon'
import Title from '@ui/title/Title'
import { StyledContainer, StyledPage } from '@styles/styles'
import FavoritesSection from '@components/favoritesSection/FavoritesSection'
import { AppState } from '@store/index'
import { useSelector } from 'react-redux'
import { StyledFavoritesText } from './styled'
import { Link } from 'react-router-dom'

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
                    <StyledFavoritesText>
                        You haven't added anything to favorites yet. Do this on the <Link to={'/'}>home page</Link>.
                    </StyledFavoritesText>
                </StyledContainer>
            )}
        </StyledPage>
    )
}

export default FavoritesPage
