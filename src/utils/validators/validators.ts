
export const required =(value: string)  => {
    if (value) return 'error message'
return 'Field is required '
}

export const maxLengthCreator = (maxLength: number) => (value: string)  => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}