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

    // Now you can see the updated values
    console.log(username_str, email_str, password_str);
});

export { username_str, email_str, password_str };
