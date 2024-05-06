import { PAGINATION_DELIMITER } from '@constants/dataConstants'
import { getNumbers } from './getNumbers'

export const getPages = (currentPage: number, pageCount: number): (number | string)[] => {
    const arr: (number | string)[] = []

    if (currentPage <= 4) {
        arr.push(...getNumbers(1, currentPage >= pageCount - 1 ? pageCount : currentPage + 2))
        if (currentPage + 3 < pageCount) {
            arr.push(PAGINATION_DELIMITER)
        }
        if (currentPage + 2 < pageCount) {
            arr.push(pageCount)
        }
    } else if (currentPage >= 5 && currentPage <= pageCount - 4) {
        arr.push(
            1,
            PAGINATION_DELIMITER,
            ...getNumbers(currentPage - 2, currentPage + 2),
            PAGINATION_DELIMITER,
            pageCount
        )
    } else if (currentPage > pageCount - 4) {
        arr.push(1, PAGINATION_DELIMITER, ...getNumbers(currentPage - 2, pageCount))
    }

    return arr
}
