import { getNumbers } from './getNumbers'

export const getPages = (currentPage: number, pageCount: number): (number | '...')[] => {
    const arr: (number | '...')[] = []

    if (currentPage <= 4) {
        arr.push(...getNumbers(1, currentPage >= pageCount - 1 ? pageCount : currentPage + 2))
        if (currentPage + 3 < pageCount) {
            arr.push('...')
        }
        if (currentPage + 2 < pageCount) {
            arr.push(pageCount)
        }
    } else if (currentPage >= 5 && currentPage <= pageCount - 4) {
        arr.push(1, '...', ...getNumbers(currentPage - 2, currentPage + 2), '...', pageCount)
    } else if (currentPage > pageCount - 4) {
        arr.push(1, '...', ...getNumbers(currentPage - 2, pageCount))
    }

    return arr
}
