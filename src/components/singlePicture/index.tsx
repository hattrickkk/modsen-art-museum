import React, { useEffect, useState } from 'react'
import {
    StyledOverviewItem,
    StyledOverviewMenu,
    StyledOverviewTitle,
    StyledSinglePicAuthor,
    StyledSinglePicDate,
    StyledSinglePicDescriptionWrapper,
    StyledSinglePicImageWrapper,
    StyledSinglePicInfo,
    StyledSinglePicTitle,
    StyledSinglePicture,
} from './styled'
import defaultImage from '@assets/default.svg'
import SaveButton from '@ui/saveButton/SaveButton'
import { PicType } from '@customTypes/picture'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@store/index'
import { loadSinglePic } from '@store/singlePic/actions'
import { removeFromFavoritesAction, setAsFavoriteAction } from '@store/favorites/actions'
import { isIdInFavorites } from '@utils/isIdInFavorites'
import { getMappedObject } from '@utils/getMapedObj'
import { MAX_LENGTH_FOR_EXHIBITION_HISTORY_FIELD } from '@constants/magicNumbers'

const SinglePicture = () => {
    const { picId } = useParams()
    const dispath = useDispatch<AppDispatch>()
    const singlePic = useSelector((state: AppState) => state.singlePicture.item)
    const favsFromState: PicType[] = useSelector((state: AppState) => state.favs.list)
    const [imageURL, setImageURL] = useState<null | string>(null)
    const [isFav, setIsFav] = useState<boolean>(isIdInFavorites(singlePic.id, favsFromState))

    useEffect(() => {
        dispath(loadSinglePic(+(picId as string)))
    }, [picId])

    useEffect(() => {
        fetch(singlePic.image).then(res => setImageURL(res.status === 200 ? singlePic.image : null))
        setIsFav(isIdInFavorites(singlePic.id, favsFromState))
    }, [singlePic])

    const saveButtonClickHandker = () => {
        if (isFav) {
            dispath(removeFromFavoritesAction(singlePic.id))
            setIsFav(false)
        } else {
            dispath(setAsFavoriteAction(getMappedObject(singlePic)))
            setIsFav(true)
        }
    }

    return (
        <StyledSinglePicture>
            <StyledSinglePicImageWrapper $outline={!imageURL}>
                <SaveButton onClick={saveButtonClickHandker} isFav={isFav} />
                <img src={imageURL ? imageURL : defaultImage} alt='' />
            </StyledSinglePicImageWrapper>
            <StyledSinglePicDescriptionWrapper>
                <StyledSinglePicInfo>
                    <StyledSinglePicTitle>{singlePic.title}</StyledSinglePicTitle>
                    <StyledSinglePicAuthor>{singlePic.author}</StyledSinglePicAuthor>
                    <StyledSinglePicDate>{singlePic.dateDisplay}</StyledSinglePicDate>
                </StyledSinglePicInfo>
                <div>
                    <StyledOverviewTitle>Overview</StyledOverviewTitle>
                    <StyledOverviewMenu>
                        {singlePic.authorNationality && (
                            <StyledOverviewItem>
                                <span>Artist nationality:</span>
                                {singlePic.authorNationality}
                            </StyledOverviewItem>
                        )}
                        {singlePic.dimensions && (
                            <StyledOverviewItem>
                                <span>Dimensions:</span>
                                {singlePic.dimensions}
                            </StyledOverviewItem>
                        )}
                        {singlePic.creditLine && (
                            <StyledOverviewItem>
                                <span>Creadit Line:</span>
                                {singlePic.creditLine}
                            </StyledOverviewItem>
                        )}
                        {singlePic.exhibitionHistory && (
                            <StyledOverviewItem
                                $isBig={
                                    !!(singlePic.exhibitionHistory.length > MAX_LENGTH_FOR_EXHIBITION_HISTORY_FIELD)
                                }
                            >
                                <span>Repository:</span>
                                <span>{singlePic.exhibitionHistory}</span>
                            </StyledOverviewItem>
                        )}
                        <StyledOverviewItem>{singlePic.isPublic ? 'Public' : 'Proprietary'}</StyledOverviewItem>
                    </StyledOverviewMenu>
                </div>
            </StyledSinglePicDescriptionWrapper>
        </StyledSinglePicture>
    )
}

export default SinglePicture
