/**
 * Chunk Array
 * @param arr
 * @param chunkSize
 * @example
 *
 * chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)
 * // Returns
 * [[1, 2, 3], [4, 5, 6], [7, 8]]
 */
export function chunkArray<T>(arr: T[], chunkSize: number) {
    if (chunkSize <= 0) throw "Invalid chunk size";

    const R: any[] = [];

    for (let i = 0, len = arr.length; i < len; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));

    return R as T[];
}