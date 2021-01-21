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

async function pall(object) {
    const entries = Object.entries(object);
    const awaitedEntries = await Promise.all(
        entries.map(async ([key, value]) => [key, await value])
    );
    return Object.fromEntries(awaitedEntries);
}
