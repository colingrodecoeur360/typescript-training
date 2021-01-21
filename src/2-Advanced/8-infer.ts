run();

async function run() {
    const result = await pall({
        a: Promise.resolve("a"),
        b: Promise.resolve(2),
        c: Promise.resolve(true),
        d: "la réponse D",
    });
    console.log(result);
    return result;
}

type ResolveType<T> = T extends Promise<infer U> ? U : T;

async function pall<T>(
    object: T
): Promise<
    {
        [key in keyof T]: ResolveType<T[key]>;
    }
> {
    const entries = Object.entries(object);
    const awaitedEntries = await Promise.all(
        entries.map(async ([key, value]) => [key, await value])
    );
    return Object.fromEntries(awaitedEntries);
}
