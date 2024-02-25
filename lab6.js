//Print a la página
document.write("<strong> Ejercicio A: </strong> Validador de Passwords <br></br>");

//Crear botones para escribir y confirmar contraseña
document.write("<div class='container'>");
document.write("<form id='passwordForm'>");
document.write("<input type='password' id='password' placeholder='Enter password'>");
document.write("<input type='password' id='confirmPassword' placeholder='Confirm password'>");
document.write("<div class='mensaje' id='mensaje'></div>");
document.write("<button type='submit'>Validar</button>");
document.write("</form>");
document.write("</div>");

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validarPassword();
});

function validarPassword() {
    let password = document.getElementById("password").value;
    let confirmarPassword = document.getElementById("confirmPassword").value;
    let mensaje = document.getElementById("mensaje");

    //Array para todas las verificaciones
    let verificaciones = [];

    //Revisar que son iguales
    if (password !== confirmarPassword) {
        verificaciones.push("Las contraseñas no son iguales :( ");
    //Revisar si tiene al menos 8 caracteres
    } if (password.length < 8) {
        verificaciones.push("La contraseña tiene que tener al menos 8 caracteres :( ");
    //Revisar si tiene al menos una minúscula
    } if (!/[a-z]/.test(password)) {
        verificaciones.push("La contraseña tiene que tener al menos una letra minúscula :( ");
    //Revisar si tiene al menos una mayúscula
    } if (!/[A-Z]/.test(password)) {
        verificaciones.push("La contraseña tiene que tener al menos una letra mayúscula :( ");
    //Revisar si tiene al menos un número
    } if (!/\d/.test(password)) {
        verificaciones.push("La contraseña tiene que tener al menos un número :( ");
    //Revisar si tiene al menos un símbolo
    } if (!/\W/.test(password)) {
        verificaciones.push("La contraseña tiene que tener al menos un símbolo :( ");
    }

     // Mostrar problemas identificados
     if (verificaciones.length > 0) {
        mensaje.innerHTML = verificaciones.join("<br>");
        mensaje.className = "invalido";
    } else {
        mensaje.textContent = "Tu contraseña es segura :D ";
        mensaje.className = "valido";
    }
}
