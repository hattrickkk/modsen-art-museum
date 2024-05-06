export const debounce = <T extends (search: string) => void>(fn: T, ms: number = 500) => {
    let timeout: NodeJS.Timeout

    return function (this: unknown, ...args: Parameters<T>) {
        const fnCall = () => {
            fn.apply(this, args)
        }

        clearTimeout(timeout)
        timeout = setTimeout(fnCall, ms)
    }
}
