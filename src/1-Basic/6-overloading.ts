function addNaive(a: number | string, b: number | string) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Incompatible types");
}

console.log(addNaive(2, 3));
console.log(addNaive("James", "Bond"));
console.log(addNaive("James", 2)); // no error
console.log(addNaive(1, "Bond")); // no error

function addSmart(a: number, b: number): number;
function addSmart(a: string, b: string): string;
function addSmart(a: any, b: any) {
    return a + b;
}

console.log(addSmart(2, 3));
console.log(addSmart("James", "Bond"));
// @ts-expect-error
console.log(addSmart("James", 2));
// @ts-expect-error
console.log(addSmart(1, "Bond"));
