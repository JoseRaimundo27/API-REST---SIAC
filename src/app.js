//ARQUIVO PARA ROTAS 
import express from "express";
const app = express();
app.use(express.json())
let password = [{
    nome: ""
}];
//Criando rota padrão
app.get("/", (req,res) =>{
    res.status(200).send("Olá ")
})

//Criando rota de cadastro
app.get("/cadastro", (req,res) => {
    res.status(200).send("<h1> CADASTRO </h1>")
})

app.post("/cadastro", (req,res) => {
    password = req.body
    res.status(201).send(password)
})
export default app
