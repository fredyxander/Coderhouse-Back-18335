const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.listen(8080,()=>console.log('listening on port 8080'));

app.post('/login',(req,res)=>{
    const userLogin = {
        username:"pepe",
        password:"1234"
    }
    //validar que el usuario exista en la base de datos

    //si existe, voy a generarle un token
    //{user:{...}} -> jkahs98123719ajhsgd82
    jwt.sign({user:userLogin},"claveDeCodificacion",(err,token)=>{
        if(err) return res.send("error generating token")
        res.json({token: token})
    })
})

// fetch(url,{
//     headers:{
//         'Authorization': "Bearer kjashd89137"
//     }
// })

//middleware para validar que el token sea el correcto
const isValidToken = (req,res,next)=>{
    // console.log(req.headers)
    const headerToken = req.headers.authorization;
    if(typeof(headerToken) !== "undefined"){
        //bearer <token> split -> ["bearer","token"]
        const tokenArray = headerToken.split(" ");
        const token = tokenArray[1];
        console.log(token)
        //kjahd981237asd - > {user:userLogin}
        jwt.verify(token,"claveDeCodificacion",(err,tokenDecoded)=>{
            if(err) return res.send("invalid token");
            res.json(tokenDecoded)
        })
        next()
    } else{
        res.send("token no valido")
    }
}

app.post("/datos-perfil",isValidToken,(req,res)=>{
    res.send("Datos de Pepe")
})

app.post('/modify-profile',isValidToken,(req,res)=>{
    res.send("perfil modificado")
})