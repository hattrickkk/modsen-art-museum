import { SinglePicType } from '@models/singlePicture'
import React from 'react'
import { StyledSinglePicInfo, StyledSinglePicTitle, StyledSinglePicAuthor, StyledSinglePicDate } from './styled'

type PropsType = {
    item: SinglePicType
}
const SinglePictureInfo = ({ item }: PropsType) => {
    return (
        <StyledSinglePicInfo>
            <StyledSinglePicTitle>{item.title}</StyledSinglePicTitle>
            <StyledSinglePicAuthor>{item.author}</StyledSinglePicAuthor>
            <StyledSinglePicDate>{item.dateDisplay}</StyledSinglePicDate>
        </StyledSinglePicInfo>
    )
}

export default SinglePictureInfo
