import {SinglePicType, SinglePictureResponseType } from '@customTypes/singlePicture'

export const getSinglePicItem = (response: SinglePictureResponseType): SinglePicType => {
    const arr = response.data.artist_display.split('\n')
    return {
        id: response.data.id,
        title: response.data.title,
        isPublic: response.data.is_public_domain,
        creditLine: response.data.credit_line,
        dateDisplay: response.data.date_display,
        dimensions: response.data.dimensions,
        exhibitionHistory: response.data.exhibition_history,
        author: arr[0],
        authorNationality: arr[1],
        image: `${response.config.iiif_url}/${response.data.image_id}/full/843,/0/default.jpg`,
    }
}
