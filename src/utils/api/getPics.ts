import { ResponseType } from '@models/types'

export const getPisc = async (limit: number, page: number = 0): Promise<ResponseType> => {
    const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_display,is_public_domain&limit=${limit}&page=${page}`
    )
    const result: ResponseType = await response.json()
    return result
}
