import { SinglePictureResponseType } from '@customTypes/singlePicture'

export const getPicById = async (id: number): Promise<SinglePictureResponseType> => {
    const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,artist_display,is_public_domain,dimensions,credit_line,date_display,exhibition_history`
    )

    return await response.json()
}
