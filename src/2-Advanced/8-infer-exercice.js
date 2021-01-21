function toJSON(object) {
    if (typeof object === "number") return object;
    if (typeof object === "string") return object;
    if (typeof object === "boolean") return object;
    if (typeof object === "object") {
        if (object.hasOwnProperty("toJSON")) {
            return object.toJSON();
        } else {
            return Object.fromEntries(
                Object.entries(object).map(([key, value]) => [
                    key,
                    toJSON(value),
                ])
            );
        }
    }
    throw new Error(`unrecognized type of object ${object}`);
}

const result = toJSON({
    a: 2,
    b: {
        c: "coucou",
    },
    d: {
        privateField: "secret password",
        toJSON() {
            return "value through toJSON";
        },
    },
});

console.log(result);
