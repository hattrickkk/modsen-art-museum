export type SinglePicResponseType = {
    artist_display: string
    credit_line: string
    date_display: string
    dimensions: string
    exhibition_history: string | null
    id: number
    image_id: string
    is_public_domain: boolean
    title: string
}

export type SinglePicType = {
    author: string
    authorNationality: string
    creditLine: string
    dateDisplay: string
    dimensions: string
    exhibitionHistory: string | null
    id: number
    image: string
    isPublic: boolean
    title: string
}

export type SinglePictureResponseType = {
    data: SinglePicResponseType
    info: {
        license_text: string
        license_links: [string, string]
        version: string
    }
    config: {
        iiif_url: string
        website_url: string
    }
}
