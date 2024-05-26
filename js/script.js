const listaNombres = [];
const formulario = document.querySelector("#formulario");
console.log(formulario)

formulario.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    const usuario = formulario.usuario.value;
    console.log(usuario)
    const password = formulario.password.value;
    console.log(password)
    verificar(usuario, password)
})

const verificar = (valorName, valorPassword) => {
    const errores = ["Realida lo siguiente: "]
    const regExpName = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    const regExpPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    /*Minimo 8 caracteres
Al menos una letra mayúscula
Al menos una letra minucula
Al menos un dígito
No espacios en blanco*/

    if (!regExpName.test(valorName)) {
        const alertName = "Introduce un nombre válido"
        errores.push(alertName);
    } 
    if (!regExpPassword.test(valorPassword)){
        const alerPassword = "Introduce una constraseña válida"
        errores.push(alerPassword);
    }
    if (errores.length == 1){
        alert(`Se ha guardado correctamente el siguiente usuario: \n ${valorName}`)
        formulario.reset;
    } else {
        const respuestaErrores = errores.reduce((anterior, actual)=>  anterior + "\n" + actual);
        alert(respuestaErrores)
    }
}
