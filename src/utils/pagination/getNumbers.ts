export const getNumbers = (start: number, end: number): number[] => {
    const res = []
    for (let i = start; i <= end; i++) {
        res.push(i)
    }
    return res
}
