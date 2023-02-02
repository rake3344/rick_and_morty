
const regexUser = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /\d/;

export function validation(userData){
    let errors = {};
    if(!regexUser.test(userData.username)){
        errors.username = 'El usuario debe ser un email válido';
    } else if(userData.username.length > 35){
        errors.username = 'El usuario debe tener menos de 35 caracteres';
    } else if(!regexPassword.test(userData.password)){
        errors.password = 'La contraseña debe tener al menos un número';
    } else if(!userData.username) {
        errors.username = 'El usuario no puede estar vacio';
    } else if(userData.password < 6 || userData.password > 10){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
    return errors;
}