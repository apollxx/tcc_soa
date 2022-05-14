export const isOfEnum = (value: any, enumerable: Object) => {
    const values = Object.values(enumerable)
    return values.includes(value)
}