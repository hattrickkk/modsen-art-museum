import { SearchResponseType } from '@customTypes/search'

export const getSearchResults = async (search: string, page: number = 1): Promise<SearchResponseType> => {
    const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?fields=id,title,image_id,artist_display,is_public_domain,date_start,date_end&limit=9&page=${page}&q=${search}`
    )
    return await response.json()
}
