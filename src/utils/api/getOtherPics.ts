import { ResponseType } from '@models/types'

export const getOtherPics = async (): Promise<ResponseType> => {
    const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_display,is_public_domain&limit=9`
    )
    const result: ResponseType = await response.json()
    return result
}