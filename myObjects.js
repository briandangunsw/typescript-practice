"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Brian",
    email: "Brian@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Brian", isPaid: false, email: "Brian@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
