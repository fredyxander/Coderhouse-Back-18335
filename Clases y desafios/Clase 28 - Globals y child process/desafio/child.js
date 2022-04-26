const calcular = ()=>{
    let suma = 0;
    for(let i=0;i<10e9;i++){
        suma +=i
    }
    return suma
}

process.on("message",parentMsg=>{
    if(parentMsg === "iniciar"){
        const suma = calcular();
        process.send(suma)
    }
})