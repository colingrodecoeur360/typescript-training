interface User {
    name: string;
    age: number;
}

function getUserAttribute(user: User, key: keyof User) {
    return user[key];
}

const user: User = {
    name: "James Bond",
    age: 40,
};

// should be of type string
const name = getUserAttribute(user, "name");
// should be of type number
const age = getUserAttribute(user, "age");
