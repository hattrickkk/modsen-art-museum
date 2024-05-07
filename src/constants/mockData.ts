import { PicType } from '@customTypes/picture'
import { SinglePicType } from '@customTypes/singlePicture'

export const MOCK_ITEM: PicType = {
    id: 1,
    title: 'Card 1',
    author: 'Artist 1',
    isPublic: true,
    image: 'https://www.artic.edu/iiif/2/2193cdda-2691-2802-0776-145dee77f7ea/full/843,/0/default.jpg',
}

export const MOCK_ITEMS_LIST: PicType[] = [
    {
        id: 1,
        title: 'Card 1',
        author: 'Artist 1',
        isPublic: false,
        image: 'https://www.artic.edu/iiif/2/8cb72d4a-0be3-4a3d-63bc-b93bd6694fe6/full/843,/0/default.jpg',
    },
    {
        id: 2,
        title: 'Card 2',
        author: 'Artist 2',
        isPublic: true,
        image: 'https://www.artic.edu/iiif/2/8cb72d4a-0be3-4a3d-63bc-b93bd6694fe6/full/843,/0/default.jpg',
    },
    {
        id: 3,
        title: 'Card 3',
        author: 'Artist 3',
        isPublic: true,
        image: 'https://www.artic.edu/iiif/2/8cb72d4a-0be3-4a3d-63bc-b93bd6694fe6/full/843,/0/default.jpg',
    },
]
