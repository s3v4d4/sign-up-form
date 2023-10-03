const password_input = document.querySelector('#password');
const confirm_password_input = document.querySelector('#confirm_password');
const error_message = document.querySelector(".message");

password_input.addEventListener("input",(e) => {
    let password = password_input.value;
    let password_check = confirm_password_input.value;
    if (password == password_check){
        error_message.classList.remove("error");
    }else{
        error_message.classList.add("error");
    }
});

confirm_password_input.addEventListener("input",(e) => {
    let password = password_input.value;
    let password_check = confirm_password_input.value;
    if (password == password_check){
        error_message.classList.remove("error");
    }else{
        error_message.classList.add("error");
    }
});
