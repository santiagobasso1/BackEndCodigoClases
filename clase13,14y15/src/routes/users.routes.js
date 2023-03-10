import { Router } from "express";
import { userModel } from "../models/user.js";



const routerUser = Router();

routerUser.get("/",async(req,res)=>{
    try{
        const users = await userModel.find()
        res.send({resultado:"success",users:users})
    }catch(error){
        res.send("Error en la consulta de usuarios, error:",error.message)
    }
})

routerUser.post("/",async(req,res)=>{
    try{
        const {nombre, apellido, email, password} = req.body;
        const resultado = await userModel.create({
            nombre,apellido,email,password
        });
        res.send({resultado:"success",resultado:resultado})
    }catch(error){
        res.send("Error en la creación de usuario, error:",error.message)
    }
})

export default routerUser