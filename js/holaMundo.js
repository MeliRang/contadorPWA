var nombre = "Carmen";
document.write('Hola ' + nombre + ' desde JavaScript');

//Hoisting
//En JS las declaraciones se mueven al inicio del ambito. Este comportamiento se conoce como Hoiting.

diaDeHoy();

function diaDeHoy(){
    document.write("<br>El día de hoy es: " + dia);

}

var dia = 'Sábado';

//Cohersión
var a = 20;
var b = 4;

b = a + ""; //String
console.log(typeof b);

//Convirtiendo de número a cadena
var c = String(a);
console.log(typeof c);

//Convirtiendo de cadena a número
var d = Number(c);
console.log(typeof d);

//Condicionales
var edad = 18;

if(edad === 18){
    document.write('<br> Eres mayor de edad ya puedes votar');
    }
    else if(edad > 18){
        document.write('<br> Eres mayor de edad y puedes votar de nuevo');
    }
    else{
        document.write('<br>Eres menor de edad y no puedes votar');
    }

//Operador ternario
var resultado = edad >= 18 ? "Eres mayor de edad" : "No eres mayor de edad";

document.write('<br>Resultado = ' + resultado);

var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

document.write('<p>Estudiantes<br>')
//Usando un ciclo for para recorrer el arreglo
for(var i=0; i<estudiantes.length ;i++){
    document.write(estudiantes[i] + ',');
}
document.write('</p>')


document.write('<p>Estudiantes<br>')
//Usando un ciclo for... of para recorrer el arreglo
for(var estudiante of estudiantes){
    document.write(estudiante + ',');
}
document.write('</p>')

//Ciclo While
while(estudiantes.length > 0){
    estudiante = estudiantes.shift();
    document.write('<p>'+estudiante+'</p>')
}

//Funciones Declarativas - function para definir la función
function miFuncionD(){
    return "Se ejecuto la función";
}

document.write('<p>'+miFuncionD()+'</p>');

//Funciones de Expresión de parametros (anonimas)
var miFuncionE = function(a,b){
    return a + b;
}

document.write('<p>5+10 = '+miFuncionE(5,10)+'</p>');

//Objetos en JavaScript

//Definiendo un nuevo objeto
var Auto = {
    //Propiedades
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,

    //Métodos
    detalleAuto: function(){
        document.write("<p>Auto: " + this.modelo + " " + this.anio + "</p>");
    }
}

//Mostramos el objeto completo
console.log(Auto);
document.write("Marca: " + Auto.marca);
Auto.detalleAuto();

//Definiendo una clase mediante una función constructora
function CAuto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

//Creando un nuevo objeto de la clase Auto
var autoNuevo = new CAuto('Tesla', 'Model 3', 2021);

//Mostrando el nuevo objeto
document.write('<p>Auto Nuevo: Marca: ' + autoNuevo.marca + 
                ' Modelo : ' +autoNuevo.modelo+
                ' Año: ' +autoNuevo.anio + '</p>');


//Arrays de Objetos

//Creando el array
var articulos = [
    { nombre: 'Bicicleta', costo: 3000},
    { nombre: 'Televisión', costo: 5500},
    { nombre: 'Libro', costo: 320},
    { nombre: 'Celular', costo: 11215},
];

//Usando el método forEach para recorrer el array
document.write('<ul>')
articulos.forEach(function(articulo){
    document.write('<li>' + articulo.nombre + ' - ' + articulo.costo + '</li>');
});
document.write('</ul>');

//Usando el método filter para filtrar aquellos objetos del arreglo con un costo menor o igual a 5000 y guardarlos en una nueva lista
var articulosBaratos = articulos.filter(function(articulo){
    return articulo.costo <= 5000;
})


document.write('Baratos<ul>')
articulosBaratos.forEach(function(articulo){
    document.write('<li>' + articulo.nombre + ' - ' + articulo.costo + '</li>');
});
document.write('</ul>');

//Usando la función map para manejar los datos de los objetos y guardarñps en una nueva lista
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;  
});


document.write('Articulos<ul>')
nombreArticulos.forEach(function(articulo){
    document.write('<li>' + articulo + '</li>');
});
document.write('</ul>');

