//ARQUIVO PARA ROTAS 
import express from "express";
const app = express();

//Criando rota padrão
app.get("/", (req,res) =>{
    res.send("Olá ")
})

//Criando rota de cadastro
app.get("/cadastro", (req,res) => {
    res.send("<h1> CADASTRO </h1>")
})
export default app
