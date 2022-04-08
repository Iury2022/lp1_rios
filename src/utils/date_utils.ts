export const toDateString = (date: Date) => date.toLocaleDateString()

export const toTimestampString = (date: Date) => `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;