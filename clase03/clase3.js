// //ECMA 6

// class Empleado{
//     constructor(nombre,apellido,edad,sueldo){
//         this.nombre=nombre;
//         this.apellido=apellido;
//         this.edad=edad;
//         this.sueldo=sueldo;
//     }
//     actualizarSueldo(porcentaje){
//         this.sueldo*=porcentaje;
//     }
//     get consultarSueldo(){
//         return this.sueldo;
//     }
//     set modificarSueldo(nuevoSueldo){
//         this.sueldo=nuevoSueldo;
//     }
// }

// const empleado1 = new Empleado("Santiago","Basso",23,9000);
// empleado1.actualizarSueldo(1.2);
// empleado1.modificarSueldo=23;
// // console.log(empleado1.consultarSueldo);


// //ECMA 7
// console.log(Math.pow(5,3));
// console.log(5**3);
// const nombres = ["Fran","Axelento","Matilde","Maria"]
// console.log(nombres.includes("Axelento"));

//ECMA 8
const libro={
    nombre: "Sillicon Valley",
    editorial: "Salamandra",
    autor: "Bill Gates",
    year: 2005,
    precio: 500,
    stock: 32
}

// console.log(Object.keys(libro)); //Devuelve atributos del objeto
// console.log(Object.values(libro)); //Devuelve valores
// console.log(Object.entries(libro)); //Devuelve claves y valores del objeto

// const libro1={...libro};

// console.log(libro1)
 
class Empleado{
    #sueldo
    constructor(nombre,apellido,edad,sueldo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.#sueldo=sueldo;
    }
    actualizarSueldo(porcentaje){
        this.#sueldo*=porcentaje;
    }
    get getSueldo(){
        return this.#sueldo;
    }
    set modifySueldo(nuevoSueldo){
        this.#sueldo=nuevoSueldo;
    }
}

const empleado1 = new Empleado("Santiago","Basso",23,9000);
console.log(empleado1.getSueldo)
