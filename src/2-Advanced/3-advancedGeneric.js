// question 1: type buildNotifier
// question 2: how would you add an indefinite number of arguments instead of just 1

function buildNotifier() {
    const observers = [];

    return {
        notify(arg) {
            observers.map((observer) => observer(arg));
        },
        subscribe(observer) {
            observers.push(observer);
        },
    };
}

const userCreatedNotifier = buildNotifier();
userCreatedNotifier.subscribe(onUserCreated);
createUser();
createUser();

function createUser() {
    //...
    const userId = Math.round(Math.random() * 100);
    userCreatedNotifier.notify(userId);
}
function onUserCreated(id) {
    console.log(`User ${id} created`);
}
