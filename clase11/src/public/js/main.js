const socket = io();
socket.emit("mensaje", "Primera info al servidor") 

socket.on("mensaje-general",info=>{
    console.log(info)
})

socket.on("mensaje-socket-propio",info=>{
    console.log(info)
})