console.log("Clase1");

class Empleado{
    constructor(nombre, apellido, edad, dni, sueldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.sueldo = sueldo;
    }
    aumentarSueldo(porcentaje){
        this.sueldo *= porcentaje;
    }
}

class Proyecto{
    constructor(nombre, plazoEnDias, precio){
        this.nombre=nombre;
        this.plazoEnDias=plazoEnDias;
        this.precio=precio;
    }

}

const empleado1=new Empleado("Pedro","Parker",19,95949114,1200);

empleado1.aumentarSueldo(1.2);

console.log(empleado1);

