// prettier-ignore
type ToJSON<T> =
    T extends number ? number :
    T extends string ? string :
    T extends boolean ? boolean :
    T extends { toJSON(): string } ? string : {
        [key in keyof T]: ToJSON<T[key]>
    };

function toJSON<T>(object: T): ToJSON<T> {
    return doToJSON(object);

    function doToJSON(element: any) {
        if (typeof element === "number") return element;
        if (typeof element === "string") return element;
        if (typeof element === "boolean") return element;
        if (typeof element === "object") {
            if (element.hasOwnProperty("toJSON")) {
                return element.toJSON();
            } else {
                return Object.fromEntries(
                    Object.entries(element).map(([key, value]) => [
                        key,
                        toJSON(value),
                    ])
                );
            }
        }
        throw new Error(`unrecognized type of object ${object}`);
    }
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
