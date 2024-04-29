export const debounce = <T extends (...args: any[]) => void>(
    fn: T,
    ms: number = 500
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout

    return function (this: any, ...args: Parameters<T>) {
        const fnCall = () => {
            fn.apply(this, args)
        }

        clearTimeout(timeout)
        timeout = setTimeout(fnCall, ms)
    }
}
