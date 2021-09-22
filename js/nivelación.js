//Definición de variables 

//var nombre = 'Profesor';
//let nombre = 'Profesor';
const nombre = 'Profesor';

document.write(nombre);
////////////////////////////////////
document.write("<br />");
//Fat arrow functions
/*Forma tradicional de definir funciones
//function sumar(a,b){
//    return a + b;
}*/


//Forma Moderna utilizando arrow functions o Fat ArrowFunctions
/*const sumar = (a, b) => {
    return a + b;
}*/

const sumar = (a,b) => a+b;

const a = 10;
const b = 5;
const resultado = sumar(a, b);
document.write('Suma = ' + resultado);
////////////////////////////////////////////////////////
document.write("<br />");

//Objetos con formato JSON
const Usuario = {
    nombreU: 'Mario',
    edad: 20,
    email: 'mario@gmail.com'
};

document.write('Usuario => Nombre: '+Usuario.nombreU +
                'Edad: ' + Usuario.edad +
                'Email: ' + Usuario.email);
                
//Redefiniendo usuario con Object Destructurin.
const {nombreU, edad, email} = {
    nombreU: 'Juan',
    edad: 32,
    email: 'juan@gmail.com'
};
document.write("<br />");
document.write('Usuario => Nombre: '+nombreU+
                'Edad: '+edad+
                'Email: '+email);
////////////////////////////////////////////////////////
document.write("<br />");
const usuarios = ['Juan','Carlos','Lucia','Ana'];
document.write(usuarios);

//Array destructuring
const [usuario1, usuario2] = ['Juan','Carlos','Lucia','Ana'];
document.write("<br />");
document.write(usuario1 + ' , ' + usuario2);

const [, , usuario3, usuario4] = ['Juan','Carlos','Lucia','Ana'];
document.write("<br />");
document.write(usuario3 + ' , ' + usuario4);

//Uso del operador Spread para unir elementos de arreglos
const frutasDulces = ['manzana','uva','mango'];
const frutasAcidas = ['limon', 'naranja', 'toronja'];
//Unimos arreglos
const frutas = [... frutasDulces, ... frutasAcidas];
const frutasII = frutasDulces + frutasAcidas;
document.write("<br />");
document.write(frutas);
document.write("<br />");
document.write(frutasII);
////////////////////////////////////////////////////////
document.write("<br />");
//Uso de Template String
const alumno = 'Daniel';
const edadAlumno = new Date().getFullYear() - 2000;

//Generando un mensaje usando Template String y backticks dentro de {} para poder ejecutar o invocar cualquier cosa usando `
const mensaje = `Bienvenido ${alumno}, tu edad es de: ${edadAlumno}`;
document.write(mensaje);
////////////////////////////////////////////////////////
document.write("<br />");

//Uso de Intervalos en JS
const saludar = () => document.write('<li>Hola a todos</li>');

document.write('<ul>');
//Usamos la función setInterval para invocar a la función saludar cada, 3 segundos
setInterval(saludar(), 3000); //Con parentesis lo hace solo una vez si no infintamente (saludar, 3000)
document.write('</ul>');
/////////////////////////////////////////////////////////
document.write("<br />");
//Promesas en JS
/** Las promesas son una nueva forma de trabajar con cosas que pueden ocurrir o no. Es un
código que permite resolver un problema, es decir, dar una respuesta que puede ser positiva o negativa
*Las promesas se definen como una función que retorna un objeto llamado Promise, este objeto recibe una función tipo callback con dos parámetros:
    - Resolve: Representa la respuesta que nos van a devolver en caso de que lo que se procese dentro dea exitoso.
    - Reject: Representa la respuesta que nos va devolver en caso de que lo que se procese dentro no sea exitoso.
*/

const dividir = (num1,num2) => {
    return new Promise((resolve, reject) =>{
        if(num2 === 0){
            reject('No se puede dividir entre 0');
        }
        else{
            resolve(num1/num2);
        }
    });
};

//Al ser dividir una promesa, se utiliza las sentencias then y catch, donde then hace referencia al resolver y catch hace referencia al reject.
const division = dividir(6,3).then((res) => {
    document.write(`División = ${res}`);
})
.catch((error) =>{
    document.write(error);
});

//Uso de la Función Fectch en JS
fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data);
})
///////////////////////////////////////////////////////
//Uso de la libreria Axios
//Forma Básica
axios
    .get('https://jsonplaceholder.typicode.com/users/2')
    .then((data) => console.log(data));

//Para acceder solo al data
axios
    .get('https://jsonplaceholder.typicode.com/users/2')
    .then((data) => console.log(data.data));

//Para acceder a un data en especifico
axios
    .get('https://jsonplaceholder.typicode.com/users/2')
    .then((data) => console.log(data.data));
//////////////////////////////////////////
//Uso del async y Away para definir promesas en JavaScript

//Definiendo una promesa de nombre saludo
const promesaSaludo = () => {
    return new Promise((resolve) => {
        resolve("Respuesta Promesa");
    });
};

promesaSaludo().then((response) => console.log(response));

//Redefiniendo promesa con async
const promesaSaludoAsync = async () =>{
    return 'Respuesta promesa async';
};

promesaSaludoAsync().then((response) => console.log(response));
//Uso de la función fetch 