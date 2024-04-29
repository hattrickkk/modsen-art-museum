import { PicType } from '@models/picture'
import { SinglePicType } from '@models/singlePicture'

export const getMappedObject = (item: SinglePicType): PicType => {
    return {
        id: item.id,
        title: item.title,
        author: item.author,
        image: item.image,
        isPublic: item.isPublic,
    }
}
