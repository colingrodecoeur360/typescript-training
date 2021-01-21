function countItemsVerifying<T>(
    array: T[],
    predicate: (value: T) => boolean
): number {
    let counter = 0;
    for (const value of array) {
        if (predicate(value)) {
            counter++;
        }
    }
    return counter;
}
countItemsVerifying([1, 2, 3], (item) => item > 2);
countItemsVerifying(["a", "ab", "abc"], (item) => item.length > 2);
// @ts-expect-error
countItemsVerifying([1, 2, 3], (item) => item.length > 2);
