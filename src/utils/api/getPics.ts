import { ResponseType } from '@models/types'

export const getPics = async (limit: number, page: number = 1): Promise<ResponseType> => {
    const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_display,is_public_domain&limit=${limit}&page=${page}`
    )
    const result: ResponseType = await response.json()
    console.log(result)
    return result
}
