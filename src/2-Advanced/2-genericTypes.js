function countVerifying(array, predicate) {
    let counter = 0;
    for (let value of array) {
        if (predicate(value)) {
            counter++;
        }
    }
    return counter;
}

countVerifying([1, 2, 3, 4], (n) => n > 2);
countVerifying(["a", "ab", "abc", "abcs"], (text) => text.length > 2);
