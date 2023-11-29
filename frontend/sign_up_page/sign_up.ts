// Update your TypeScript code to use ES6 modules
const button = document.getElementById("sign_up_button") as HTMLButtonElement;

let username_str: string = "";
let email_str: string = "";
let password_str: string = "";

button.addEventListener("click", function() {
    let username = document.getElementById("username") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;

    username_str = username.value;
    email_str = email.value;
    password_str = password.value;

    alert(`Button clicked! ${username_str}`);
    console.log("Password:", password_str);
});

// Export individual variables instead of using exports
export { username_str, email_str, password_str };
