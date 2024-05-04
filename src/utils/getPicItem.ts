import { PicType, ResponseType } from '@customTypes/picture'

export const getPicItem = (response: ResponseType): PicType[] => {
    return response.data.map(el => ({
        id: el.id,
        title: el.title,
        isPublic: el.is_public_domain,
        author: el.artist_display.split('\n').length !== 1 ? el.artist_display.split('\n')[0] : null,
        image: `${response.config.iiif_url}/${el.image_id}/full/843,/0/default.jpg`,
    }))
}
