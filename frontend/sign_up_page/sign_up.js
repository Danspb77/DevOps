// Update your TypeScript code to use ES6 modules
var button = document.getElementById("sign_up_button");
var username_str = "";
var email_str = "";
var password_str = "";
button.addEventListener("click", function () {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    username_str = username.value;
    email_str = email.value;
    password_str = password.value;
    alert("Button clicked! ".concat(username_str));
    console.log("Password:", password_str);
});
// Export individual variables instead of using exports
export { username_str, email_str, password_str };
