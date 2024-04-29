import React, { useEffect, useMemo, useState } from 'react'
import { StyledSinglePicDescriptionWrapper, StyledSinglePicImageWrapper, StyledSinglePicture } from './styled'
import defaultImage from '@assets/default.svg'
import SaveButton from '@ui/saveButton/SaveButton'
import { PicType } from '@models/picture'
import Overview from '@components/overview/Overview'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '@store/index'
import { loadSinglePic } from '@store/singlePic/actions'
import { removeFromFavoritesAction, setAsFavoriteAction } from '@store/favorites/actions'
import { isIdInFavorites } from '@utils/isIdInFavorites'
import { getMappedObject } from '@utils/getMapedObj'
import SinglePictureInfo from '@components/singlePictureInfo/SinglePictureInfo'

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
                <SinglePictureInfo item={singlePic} />
                <Overview item={singlePic} />
            </StyledSinglePicDescriptionWrapper>
        </StyledSinglePicture>
    )
}

export default SinglePicture
