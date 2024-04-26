import { PicType, ResponsePicType, ResponseType } from '@models/types'

export const getPisc = async (): Promise<ResponsePicType[]> => {
    const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_display,is_public_domain&limit=${3}&page=${0}`
    )
    const result = (await response.json()) as ResponseType
    return result.data
}
