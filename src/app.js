//ARQUIVO PARA ROTAS 
import express from "express";

const app = express();

app.use(express.json()) //Middleware

let password = {
    email: "",
    senha: ""
};
//Criando rota padrão
app.get("/", (req,res) =>{
    res.status(200).send("Olá ")
})

//Criando rota de cadastro
app.get("/cadastro", (req,res) => {
    res.status(200).send(password)
})

app.post("/cadastro", (req,res) => {
    password.email = req.body.email
    password.senha = req.body.senha
    res.status(201).send([password])
})
export default app
