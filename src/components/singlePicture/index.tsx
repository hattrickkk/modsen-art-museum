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
import { useParams } from 'react-router-dom'
import { getMappedObject } from '@utils/getMapedObj'
import { MAX_LENGTH_FOR_EXHIBITION_HISTORY_FIELD } from '@constants/magicNumbers'
import { getPicById } from '@utils/api/getPicById'
import { SinglePicType } from '@customTypes/singlePicture'
import { getSinglePicItem } from '@utils/getSinglePicItem'
import { useImage } from '@utils/hooks/useImage'
import { useClickFavs } from '@utils/hooks/useClickFav'

const initValue: SinglePicType = {
    author: '',
    authorNationality: '',
    creditLine: '',
    dateDisplay: '',
    dimensions: '',
    exhibitionHistory: '',
    id: 0,
    image: '',
    isPublic: false,
    title: '',
}

const SinglePicture = () => {
    const { picId } = useParams()
    const [singlePic, setSinglePic] = useState<SinglePicType>(initValue)

    const imageURL = useImage(singlePic.image as string, singlePic)
    const { isfav, clickHandker } = useClickFavs(getMappedObject(singlePic), true)

    useEffect(() => {
        getPicById(+(picId as string))
            .then(res => getSinglePicItem(res))
            .then(res => setSinglePic(res))
    }, [picId])

    return (
        <StyledSinglePicture>
            <StyledSinglePicImageWrapper $outline={!imageURL}>
                <SaveButton onClick={clickHandker} isFav={isfav} />
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
