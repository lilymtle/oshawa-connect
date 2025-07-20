/*
    Local food businesses will have a price level from 1 to 4.
    This util function converts that number to $, and the $ repeats depending on the price level.
    E.g., a price level of 2 will result in $$ --> more user friendly than pure integers
*/

export function formatPriceLevel(level?: number) {
    return level ? "$".repeat(level) : "N/A"
}