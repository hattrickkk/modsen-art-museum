import { SinglePicType } from '@customTypes/singlePicture'
import { useState, useEffect } from 'react'

export const useImage = (path: string, dependencies?: SinglePicType): string | null => {
    const [imageURL, setImageURL] = useState<null | string>(null)

    useEffect(
        () => {
            fetch(path).then(res => setImageURL(res.status === 200 ? path : null))
        },
        dependencies ? [dependencies] : []
    )

    return imageURL
}
