"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.password_str = exports.login_str = void 0;
const button = document.getElementById("login_button");
let login_str = "";
exports.login_str = login_str;
let password_str = "";
exports.password_str = password_str;
button.addEventListener("click", function () {
    let login = document.getElementById("username");
    let password = document.getElementById("password");
    exports.login_str = login_str = login.value;
    exports.password_str = password_str = password.value;
    // alert(`Button clicked! ${password_str}`);
    // console.log("Password:", password_str);
});
