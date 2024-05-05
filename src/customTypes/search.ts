import { PaginationType, PicType, ResponsePicType } from './picture'

export type SearchPicType = PicType & {
    dateStart: number
    dateEnd: number
}

export type SearchResponsePicType = ResponsePicType & {
    date_start: number
    date_end: number
}

export type SearchResponseType = {
    data: SearchResponsePicType[]
    info: {
        license_text: string
        license_links: [string, string]
        version: string
    }
    config: {
        iiif_url: string
        website_url: string
    }
    pagination: PaginationType
}
