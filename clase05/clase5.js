const ruta = "./desafio5.txt";
// const fs = require('fs');
// class Persona{
//     constructor(nombre, apellido){
//         this.id = Persona.idAutoIncremental(),
//         this.nombre = nombre,
//         this.apellido = apellido      
//     }
//     static idAutoIncremental(){
//         if (this.idIncremental){
//             this.idIncremental++;
//         }else{
//             this.idIncremental = 1;
//         }
//         return this.idIncremental;
//     }
// }


// var persona1 = new Persona("santiago","Bassso")

// var persona2 = new Persona("santiago","Bassso")

// var persona3 = new Persona("santiago","Bassso")

// var persona4 = new Persona("santiago","Bassso")

// console.log(persona1)
// console.log(persona2)
// console.log(persona3)
// console.log(persona4)



//SINCRONISMO

// fs.writeFileSync(ruta,"aaaaaaaaaa");
// if (fs.existsSync(ruta)){
//     let contenido = fs.readFileSync(ruta,"utf-8")
//     fs.appendFileSync(ruta, "\n chauchis")
//     contenido = fs.readFileSync(ruta,"utf-8")

// }


//ASINCRONISMO CON CALLBACKS

// fs.writeFile(ruta, "hola", (error)=>{
//     if (error){
//         return console.log("Error en escritura");
//     }
//     fs.readFile(ruta, "utf-8", (error, Resultado)=>{
//         if (error){
//             return console.log("Error en lectura"); 
//         }
//         console.log(Resultado);
//         fs.appendFile(ruta, " ejemplo", (error)=>{
//             if (error){
//                 return console.log("Error en escritura append");
//             }
//             fs.readFile(ruta,"utf-8", (error, Resultado)=>{
//                 if (error){
//                     return console.log("Error de lectura del archivo ultima");
//                 }
//                 console.log(Resultado);
//                 fs.unlink(ruta,(error)=>{
//                     if (error){
//                         console.log("Error al eliminar el archivo")
//                     }
//                 })
//             })
//         })       
//     })

// })

//ASINCRONISMO CON PROMESAS
const fs = require('fs');
// import { promises as fs} from 'fs'; //En caso de querer hacerlo con import (para eso el package.json con el Type Modules, se utiliza solo promesas por lo que no se usa fs.promises sino solo fs)

const consultasTXT = async(ruta)=>{
    await fs.promises.writeFile(ruta, "aa")
    let contenido = await fs.promises.readFile(ruta,"utf-8")
    console.log(contenido)
    await fs.promises.appendFile(ruta, "\n Probando Salto de Linea")
    contenido = await fs.promises.readFile(ruta,"utf-8")
    console.log(contenido)

}

consultasTXT(ruta)