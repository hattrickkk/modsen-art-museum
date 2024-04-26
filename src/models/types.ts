export type ResponsePicType = {
    id: number
    title: string
    image_id: string | null
    artist_display: string
    is_public_domain: boolean
}

export type PicType = {
    id: number
    title: string
    image: string
}

export type PaginationType = {
    current_page: number
    limit: number
    next_url: string
    offset: number
    total: number
    total_pages: number
}

export type ResponseType = {
    data: ResponsePicType[]
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
