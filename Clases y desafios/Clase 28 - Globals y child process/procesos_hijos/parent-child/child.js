
process.on("message",(parentMsg)=>{
    console.log('mensaje del padre', parentMsg)
    if(parentMsg === "iniciar"){
        setTimeout(() => {
            process.send("soy el hijo")
        }, 2000);
    }
    if(parentMsg === "terminar"){
        process.exit()
    }
})