/**
 * Limit string to defined length.
 * @param str
 * @param length
 * @param prependIfLong
 *
 * @example
 * strLimit("Do have a lovely day", 14, "...")
 *
 * // Returns
 * "Do have a love..."
 */
export function strLimit(str: string, length: number, prependIfLong?: string): string {
    // if not defined, return.
    if (!str) return str;

    // If string is less than limit, return
    if (str.length < length) return str;


    // Shorten string and prepend expected text
    return str.substr(0, length).trim() + (prependIfLong ? prependIfLong : "");
}


/**
 * Limit string to defined length without cutting words short.
 * @param str
 * @param length
 * @param prependIfLong
 * @example
 * strLimit("Do have a lovely day", 14, "...")
 * "Do have a love..." // lovely is cut short
 *
 * strLimitWordsByLength("Do have a lovely day", 14, "...")
 * "Do have a..." // lovely is not included.
 */
export function strLimitWordsByLength(str: string, length: number, prependIfLong?: string) {
    // Limit str without prependIfLong
    // Split string using space
    const limitedStr = strLimit(str, length).split(" ");

    // Remove last item to be sure we don't have a word that is cut short.
    limitedStr.pop();

    // Join array
    return limitedStr.join(" ").trim() + (prependIfLong ? prependIfLong : "");

}


/**
 * Limit string by words.
 * @param str
 * @param words
 * @param prependIfLong
 *
 * @example
 * strLimitWords("Do have a lovely day.", 4, "...")
 *
 * "Do have a lovely..."
 */
export function strLimitWords(str: string, words: number, prependIfLong?: string) {
    // Split words using space
    let _words = str.split(" ");

    // Return string if it has less words than required.
    if (_words.length < words) return str;

    // Splice to get amount of words specified.
    _words = _words.splice(0, words);

    // Join array..
    return _words.join(" ").trim() + (prependIfLong ? prependIfLong : "");
}