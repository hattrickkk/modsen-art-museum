import { ResponseType } from '@customTypes/picture'

export const getSearchResults = async (search: string, page: number = 1): Promise<ResponseType> => {
    const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?fields=id,title,image_id,artist_display,is_public_domain&limit=9&page=${page}&q=${search}`
    )
    return await response.json()
}
