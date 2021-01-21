interface User {
    name: string;
    age: number;
}

export function getUserAttribute(user: User, key: keyof User) {
    return user[key];
}

const user1: User = {
    name: "James",
    age: 77,
};

getUserAttribute(user1, "name");
// @ts-expect-error
getUserAttribute(user1, "level");
