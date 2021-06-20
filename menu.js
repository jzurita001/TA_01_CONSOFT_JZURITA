//VARIABLES; TIPOS DE VARIABLES; SINTAXIS EN JAVASCRIPT:

console.log("Funcionando...")
 var numero = 10 
 let num1; //undefined
 let num2= null //nulo
 let entero = 10
 let decimal = 1.2
 let string = "Hola Mundo"
 let booleano = false
 let fecha = new Date()
 let dd = fecha.getDate(),
     mm = fecha.getMonth() + 1
     aa = fecha.getFullYear(),
     hoy = `${aa}-${mm}-${dd}`
 /*const pi = 3.1416  // constante
 console.log("numero1 =", num1)
 console.log('Numero2 = ${num2}')
 console.log('Fecha de hoy=${fecha}')
 console.log(hoy) */

 //TIPOS DE ARREGLOS; JSON; OBJETO:

let numeros = [1,2,3,4,5,6,7];
let colores = ["verde","Cafe","blanco","negro"];

const json = {
    "Nombres": ["karla", "Veronica ","Katty"],
    "Generos": "Femenino"
            };

const alumno = {
    nombre: 'Jacinto',
    edad: 30,
    genero: 'Masculino',
    juegos: ['Futboll','Natacion','Canoping'],
    Conocimientos: {
      lenguajes: ['visual basic','Python','Java',],
      Materias:{
        Nivel1:'Logica',
         Nivel2: 'POO',
         Nivel3: 'POOI'
         }  
  }
};
json.genero = "M"
alumno.nombre= "Jacinto"
alumno.edad = 30
console.log('Json',json,json.genero);
console.log('Objeto',alumno.Conocimientos.Materias.Nivel1); 

// Estructuras de Control; operadores logicos, numerico, relacionales: 

let n1 = 9
let n2 = 6
if (num1 === undefined)
    console.log(`${num1}= undefined`);
if (num2 === null)
    console.log(`${num2}= null`);

if (n1 == 0){
    console.log(n1);
} else if (n1 === n2) {
    console.log(`${n1}=${n2}`);
} else{
    console.log(`${n1}!=${n2}`);
} 

let num= 4
let rec = num % 2;
switch(rec) {
    case 0:
        console.log(`${rec} - ${num} Numero Par`);
        break;
    case 1:
        console.log(`${rec} - ${num} Numero Impar`);
        break;
    
    default:
        if (isNaN(rec))
            console.log(`${rec}= Error...`);
        break;
}
console.log (`Salir del Switch`)

// Bucles(++); While:

let inc= 0
console.log("Bucle While",colores)
while (inc < colores.length && colores[inc] != "negro"){
    console.log(inc, colores[inc])
    inc= inc + 1
}

//Bucle For (++) and (--):

console.log("Recorrido For (++)", colores);
for (let i = 0; i < colores.length; i++) {
    console.log(i, colores[i]);
}

//in: 

console.log("Recorrido For in",colores)
for (let j in colores){
    console.log(j, colores[j])
}
//of:

 console.log("Recorrido For of", colores)
 for (let col of colores){
     console.log(col)
}
//Arreglo:

let nombre= "Jacinto"
for (let caract of nombre){
    console.log(caract)
}

const Personas = [
    {"Nombre": "Carlor", "Apellidos":"Espinoza"},
    {"Nombre": "Edgar ", "Apellidos":"Astudillo"},
    {"Nombre": "Juancarlos", "Apellidos":"Ruiz"},
    {"Nombre": "Mario", "Apellidos":"Velez"}
]
console.log("of");
for (let Person of Personas) {
    console.log(Person, Person.Nombre)
}

//Recorrer un Objeto Iterable; Foreach:

console.log("Foreach");
Personas.forEach(person => {
    if (personalbar.nombre != "Mario") 
    console.log(person.Nombre)
})

//Map:

const per = Personas.map(person => person.Nombre)
console.log("Map",per);

//Filter:

const person = Personas.filter(person => person.Nombre != "Edgar")
console.log("filter",person);

//Find:

const persona = Personas.find(person => person.Nombre === "Carlos")
console.log("Find",persona);

//Funciones:

function sumar(){
    console.log (8+4);
}
sumar()

const suma = () => console.log("Arrow Fun", (5+12));
suma ()

//Multiplicar: 

function multiplicar (n1,n2){
    return n1 * n2
}
let respuesta = multiplicar (8,4)
console.log("Multip Sin Arrow",respuesta);

//Arrow Funcion:
const multipli = (nu1,nu2 ) => nu1 * nu2 
console.log ("Multip con Arrow: ",multipli(32,4));

//Division: 
function dividir (nu1, nu2=4){
    let resp = 0
    try{
        resp = nu1 / nu2
    } catch (e) {
        console.log ("Incorrecto: ", e.message)
    }
    return resp
}

resp = dividir(8)
console.log("La division sin Arrow es: ",resp);
resp = dividir(7,6)
console.log("Division es: ",resp);

//Division con Arrow:

const divi = (num1,num2=5) =>{
    let resp = 0
    try{
        resp = num1 / num2
    }catch (e) {
        console.log ("Error: ", e.message)
    }
    return resp
}
console.log ("Division con Arrow",divi(16));

//FECTH:

fetch ('https://pokeapi.co/api/v2/encounter-method')
    .then(res => res.json())
    .then (datos =>{
        //console.log (datos.results)
        datos.results.forEach(nom=> console.log(nom.name,nom.url))
    })
    .catch(error => console.log("Error Api: ", error))

//ASYNC WAIT:

const obtenerDatos = async () =>{
    try{
        const resp = await fetch('https://pokeapi.co/api/v2/encounter-method')
        const datos = await resp.json()
        //console.log("-----------Async Await---------------");
        datos.results.forEach(nom=> console.log(nom.name,nom.url))
    }catch (error){
        //console.log("Error Api con ASync: ", error)
    }
}
obtenerDatos ()

//DOM: 

let contenido = document.getElementById        ('contenedor')
let variable = document.getElementById       ('variable')
console.log (contenido)
console.log (variable)
variable.innerHTML = `Enteros, Decimales, String, Boleanas, Fechas`;
variable.style.color = "cyan"
variable.style.background = "#000000"
console.log(variable);
let concepto = document.querySelector('.concepto')
console.log(concepto);
concepto.innerHTML = "Area de Memoria"

//QuerySelector:

let conceptos = document.querySelectorAll('.concepto')
let cont = 1
conceptos.forEach(parrafo=> {
    parrafo.innerHTML = `Area de Memorira #${cont}`
    //console.log (parrafo);
    cont = cont + 1
})
//Eventos

let boton = document.getElementById ('boton2')
let valor = document.getElementById ('valor')
boton.addEventListener('mouseover',()=>{
    console.log ("Clickeame")
})
boton.addEventListener('click',()=>{
    let nodo = document.createElement("p")
    nodo.innerHTML = "ingresa otro elemento"
    nodo.style.color = "cornflowerblue"
    
    contenido.appendChild (nodo)
})

valor.addEventListener('keypress',(e)=>{
    console.log(e.key);
})
