//ARQUIVO PARA ROTAS 
import express from "express";
import cors from "cors";

const app = express();
const corss = cors();

app.use(express.json()) //Middleware
app.use(corss)

let dadosLogin = {
    email: "",
    senha: ""
};
//Criando rota padrão
app.get("/", (req,res) =>{
    res.status(200).send("Olá ")
})

//Criando rota de cadastro
app.get("/cadastro", (req,res) => {
    res.status(200).send(dadosLogin)
})

app.post("/cadastro", (req,res) => {
    dadosLogin.email = req.body.email
    dadosLogin.senha = req.body.senha
    res.status(201).send([dadosLogin])
})
export default app
