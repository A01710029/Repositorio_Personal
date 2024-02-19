/* Ejercicio 1 */
//Obtener número del usuario (prompt)
const num = prompt("Escribe un número: ");

//Crear tabla de resultados
document.write("<strong> Ejercicio 1: </strong>");
document.write("<table>");
document.write("<thead>Tabla de Cuadrados y Cubos</thead>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

//Calcular cuadrado y cubo de cada número
for (let i = 1; i <= num; i++){
    const cuadrado = i*i;
    const cubo = i*i*i;
    document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
}

//Cerrar tabla
document.write("</table>");

/* Ejercicio 2 */
//Print a la página
document.write("<strong> Ejercicio 2: </strong> Suma de Números <br></br>");

//Generar dos números random
const num1 = Math.floor(Math.random()*11);
const num2 = Math.floor(Math.random()*11);

//Obtener suma real de estos números
const sum = num1 + num2;

//Registrar inicio de evento
const inicio = Date.now();

//Obtener suma del usuario
const usuarioSum = parseInt(prompt("¿Cuál es la suma de " + num1 + " y " + num2 + "?: "));

//Compara suma real y suma del usuario
if(usuarioSum == sum){
    document.write("La respuesta fue <strong> correcta! </strong><br></br>");
} else {
    document.write("La respuesta fue <strong> incorrecta :( </strong><br></br>");
}

//Calcular tiempo de respuesta de usuario
const fin = Date.now();
const lapso = fin - inicio;
document.write("El tiempo elapsado fue de " + lapso/1000 + " segundos.");

//Line break entre ejercicios
document.write("<br></br>");

/* Ejercicio 3 */
//Crear función contador
const contador = function(arr) {
    //Crear contadores
    let neg = 0;
    let cero = 0;
    let pos = 0; 
    
    //Contar negativos, ceros y positivos
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            neg++;
        } else if (arr[i] == 0){
            cero++;
        } else {
            pos++;
        }
    }

    //Regresar contadores
    return("Negativos: " + neg + " | Ceros: " + cero + " | Positivos: " + pos);
}

//Crear arreglo de números
const nums = [-3, 9, 14, 0, -9, -4, 1, 0, 7, 13];

//Llamar funcion (ejemplo)
const numEjemplo = contador(nums);
document.write("<strong> Ejercicio 3: </strong>Contador de Números en Arreglo<br></br>")
document.write("En el arreglo [-3, 9, 14, 0, -9, -4, 1, 0, 7, 13], existen estos números: <br></br>" + numEjemplo)

//Line break
document.write("<br></br>");

//Automatizar prueba
console.assert(numEjemplo == ("Negativos: " + 3 + " | Ceros: " + 2 + " | Positivos: " + 5));

document.write("Se confirmó con <strong>console.assert()</strong><br></br>");

/* Ejercicio 4 */
//Crear función promedios
const promedios = function(matriz){
    //Crear arreglo para regresar al usuario
    const promedios = [];

    //Calcular promedio del renglón de la matriz
    for (i in matriz){
        let sum = 0;
        let contador = 0;
        for (j in matriz[i]){
            sum += matriz[i][j];
            contador++; 
        } 
        let promedio = sum / contador;
        promedios.push(promedio);
    }
    return promedios;
}

//Crear arreglo de arreglo de números
const matriz = [[2,7,34,6,24], [67,3,36,54,2], [5,46,3,7,9]];

//Llamar función (ejemplo)
const matEjemplo = promedios(matriz);
console.log(matEjemplo);
document.write("<strong> Ejercicio 4: </strong> Promedios de Matriz<br></br>")
document.write("En la matriz [2,7,34,6,24], [67,3,36,54,2], [5,46,3,7,9], los promedios son: " + matEjemplo);

//Automatizar prueba
console.assert(matEjemplo.toString() === [14.6,32.4,14].toString());

//print something about confirming the results
document.write("<br></br>Se confirmó con <strong>console.assert()</strong><br></br>");

/* Ejercicio 5 */
//Crear función inverso
const inverso = function(num) {
    //Crear variables para llevar a cabo el cambio
    let largo = num.length;
    let aux = "";
    let inversoRes = "";

    //Invertir el número
    for (i = largo - 1; i >= 0; i--){
        inversoRes += num[i];
    }
    return inversoRes;
}

//Crear número para ejemplo
let invNum = "456";

//Lammar función (ejemplo)
const invEjemplo = inverso(invNum);
document.write("<strong> Ejercicio 5: </strong> Inverso de Número<br></br>")
document.write("Para el número 456, el inverso es: " + invEjemplo);

//Automatizar prueba
console.assert(654 == invEjemplo);

//Print something about confirming results
document.write("<br></br>Se confirmó con <strong>console.assert()</strong><br></br>");

//Ejercicio 6 - mio
document.write("<strong> Ejercicio 6: </strong>Estadística de Carrera de Caballos<br></br>");
document.write("Para mi ejercicio, vamos a calcular el ganador y el promedio de tiempos en una carrera de caballos. ");
document.write("Para esto, vamos a crear un objeto <strong>Caballo</strong> que guarda su nombre y tiempo en la carrera. ");
document.write("Estos caballos se guardan en un array para representar los resultados de la carrera.");

//Crear objeto Caballo
class Caballo{
    //Crear constructor
    constructor(nombre, tiempoCarrera){
        this.nombre = nombre;
        this.tiempoCarrera = tiempoCarrera;
    }
}

    //Método para calcular mejor tiempo
    function ganador(resultados){
        let mejorTiempo = 100;
        let caballoGanador = "";

        for (i = 0; i < resultados.length; i++){
            const caballo = resultados[i];
            if (caballo.tiempoCarrera < mejorTiempo){
                mejorTiempo = caballo.tiempoCarrera;
                caballoGanador = caballo.nombre;
            }
        } 

        return caballoGanador;
    }

    //Método para calcular promedio de tiempos
    function promedioTiempo(resultados){
        let tiemposTotal = 0;

        for(let i = 0; i < resultados.length; i++) {
            tiemposTotal += resultados[i].tiempoCarrera;
        }

        return tiemposTotal/resultados.length;
    }

    //Crear cinco objetos Caballo
    const pau = new Caballo("Pau", 82);
    const alex = new Caballo("Alex", 24);
    const mike = new Caballo("Mike", 92);
    const samir = new Caballo("Samir", 34);
    const jesus = new Caballo("Jesus", 28);

    //Crear arreglo carrera con los objetos
    const carrera = [pau, alex, mike, samir, jesus];

    //Llamar métodos
    const nombrarGanador = ganador(carrera);
    const promedioTiempos = promedioTiempo(carrera);

    //Imprimir información de la carrera en la página
    document.write("<br></br>Para este ejemplo, tenemos cinco caballos en la carrera: <br></br>");
    document.write("Pau (82 sgs), Alex (24 sgs), Mike (92 sgs), Samir (34 sgs) y Jesus (28 sgs)<br></br>");

    //Imprimir resultados de la carrera en página
    document.write("El ganador de la carrera es " + nombrarGanador + ".<br></br>");
    document.write("El promedio de tiempos en la carrera es de " + promedioTiempos + " segundos.<br></br>");