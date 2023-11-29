const button = document.getElementById("login_button") as HTMLButtonElement;

let login_str: string =""
let password_str: string = "";

button.addEventListener("click", function() {
    

    let login = document.getElementById("username") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;

    login_str= login.value;
    password_str = password.value;
    // alert(`Button clicked! ${password_str}`);
    // console.log("Password:", password_str);
});
export { login_str, password_str };
