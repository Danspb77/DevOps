"use strict";
const login_button = document.getElementById("login_button");
let login_str = "";
let password_str = "";
login_button.addEventListener("click", function () {
    let login = document.getElementById("username");
    let password = document.getElementById("password");
    login_str = login.value;
    password_str = password.value;
    const auth_data = {
        login: login_str,
        password: password_str
    };
    send_auth_data(auth_data);
    // alert(`Button clicked! ${password_str}`);
    // console.log("Password:", password_str);
});
async function send_auth_data(auth_data) {
    try {
        const response = await fetch("/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(auth_data)
        });
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}
