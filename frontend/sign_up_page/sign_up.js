"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.password_str = exports.email_str = exports.username_str = void 0;
const button = document.getElementById("sign_up_button");
let username_str = "";
exports.username_str = username_str;
let email_str = "";
exports.email_str = email_str;
let password_str = "";
exports.password_str = password_str;
button.addEventListener("click", function () {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    exports.username_str = username_str = username.value;
    exports.email_str = email_str = email.value;
    exports.password_str = password_str = password.value;
    alert(`Button clicked! ${username_str}`);
    console.log("Password:", password_str);
    // Now you can see the updated values
    console.log(username_str, email_str, password_str);
});
