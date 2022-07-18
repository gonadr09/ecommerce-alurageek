const inputs = document.querySelectorAll('.form-input');

const valid = (e) => {
    const input = e.target;
    console.log(e)
    if(input.validity.valid){
        input.parentElement.classList.remove("invalid_input");
    } else {
        input.parentElement.classList.add("invalid_input");
        showMessageError(input)
    }
}

const showMessageError = (input) => {
    let message;
    if(input.validity.valueMissing){
        message = '*Este campo no puede estar vacío';
    } else if(input.validity.typeMismatch){
        message = '*El correo no es válido';
    } else {
        message = '*Error en el campo';
    }
    input.parentElement.querySelector(".input-message-error").innerHTML = message;
}

inputs.forEach(input => input.addEventListener('blur', valid))

