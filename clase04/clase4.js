// const consultarDB = (confirmacion) =>{
//     return new Promise((resolve, reject)=>{
//         if (confirmacion){
//             resolve("Base de datos de cleintes")
//         }
//         reject("Acceso Denegado")
//     })
// }
// consultarDB(true)
// .then(resultado => console.log(resultado))
// .catch(error => (console.log(error)))

const consultarDolar = async ()=>{
    try{
        const response = await fetch('https://criptoya.com/api/dolar');
        const dolares = await response.json();
        return dolares;
    }
    catch{
        return(error => console.log(error))
    }

}

consultarDolar().then(({mep, solidario, blue})=>{
    console.log(mep,solidario,blue)
})