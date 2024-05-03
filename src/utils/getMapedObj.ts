import { PicType } from '@customTypes/picture'
import { SinglePicType } from 'customTypes/singlePicture'

export const getMappedObject = (item: SinglePicType): PicType => {
    return {
        id: item.id,
        title: item.title,
        author: item.author,
        image: item.image,
        isPublic: item.isPublic,
    }
}
