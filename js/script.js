const formulario = document.querySelector('#formUsuario');
const listaErrores = document.querySelector('#listaErrores');
const name = document.querySelector('#usuario');
const password = document.querySelector('#password');
const inputs = document.querySelectorAll('#formUsuario input');
const regEx = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
}
const objValidar = {
    user: false,
    password: false
}
const validarFormulario = (evento) => {
    switch (evento.target.name) {
        case 'usuario':
            (regEx.user.test(evento.target.value)){

            } else {
                
            }
        break;
        case 'password':

        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();


});


