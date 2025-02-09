let user = {}
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

const user = {
    name: "John"
};
user.name = "Pete";

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}