import { Router } from "express";
const routerProduct = Router();
import {ProductManager} from "../controllers/ProductManager.js"
const manager = new ProductManager('src/models/products.json');



routerProduct.get("/", async (req, res) => {
    if (!manager.checkArchivo()){
        await manager.cargarArchivo(); 
    }
    const products = await manager.getAllProducts();
    if (products.length>0){
        let { limit } = req.query;
        let data;
        if (!limit) {
            data = products;
        } else {
            data = products.slice(0, parseInt(limit));
        }
        res.send(data);
    }else{
        res.send("No hay productos en el archivo o éste no existe")
    }

});

routerProduct.get("/:pid", async (req, res) => {
    if (!manager.checkArchivo()){
        await manager.cargarArchivo(); 
    }
    const product = await manager.getProductById(parseInt(req.params.pid));
    JSON.stringify(product)
    if (product){
        // res.send(JSON.stringify(product)) //En caso de quererlo en formato string
        res.send(`Producto: ${product.title} con la descripción: ${product.description } y el precio ${product.price} `)
    }else{
        res.send("No se encontró el producto")
    }
});

routerProduct.post('/', async(req,res)=>{
    await manager.addProduct(req.body);
    res.send("Producto agregado")
})

routerProduct.put("/:pid", async (req, res) => {
    let id=parseInt(req.params.pid);
    let title= req.body.title;
    let desc= req.body.description;
    let price= req.body.price;
    let thumbnail= req.body.thumbnail;
    let code= req.body.ceode;
    let stock= req.body.stock;
    console.log(id)
    await manager.updateProduct({id,title,desc,price,thumbnail,code,stock})
    res.send("Producto actualizado")

});



export default routerProduct