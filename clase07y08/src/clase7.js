// import http from 'http'
// const port = 4000
// const server = http.createServer((request,response)=>{
//     response.end("Primer servidor en node")
// })

// //Ejecutar el servidor
// server.listen(port,()=>{
//     console.log(`Server port on ${port}`)
// })

import express from 'express'
const app = express();
const port = 4000;
app.use(express.json())
const usuarios =[
    {
        nombre: "Santiago",
        apellido: "Basso",
        id:"1",
        cargo:"profesor"
    },
    {
        nombre: "Axel",
        apellido: "Aguirre",
        id:"2",
        cargo: "alumno"
    },
    {
        nombre: "Martín",
        apellido: "Toscanini",
        id:"3",
        cargo: "alumno"
    }
]

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Primer server con express")
})

app.get('/user',(req,res)=>{
    res.send(JSON.stringify(usuarios))
})

app.get('/user/:idUser', (req,res)=>{
    const user = usuarios.find (usuario => usuario.id === req.params.idUser)
    if(user) {
        res.send(`Nombre de usuario ${user.nombre}`)
    } else {
        res.send(`El usuario no existe`)
    }
})

app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})

app.post('/user',(req,res)=>{
    let {nombre,apellido,cargo} = req.body;
    console.log(nombre,apellido,cargo)
    const indice = usuarios.length;
    usuarios.push({nombre,apellido,cargo,indice})
    res.send("Usuario Creado")
})