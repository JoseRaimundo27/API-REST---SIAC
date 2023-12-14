//ARQUIVO PARA ROTAS 
import express from "express";
import cors from "cors";
import conexao from "../infra/conexao.js"

const app = express();
const corss = cors();

app.use(express.json()) //Middleware
app.use(corss)

let dadosLogin = {
    email: "",
    senha: ""
};



//Criando rotas de cadastro
app.get("/cadastro", (req,res) => {

    const sql = "SELECT * FROM `login`;"
    conexao.query(sql,(error,result)=>{
        if(error){
            res.status(400).json({
                "erro": error
            })
        }else{
            res.status(200).json(result)
        }
    })
})

//cadastro by ID:
app.get("/cadastro/:id", (req,res) =>{
    const sql = "SELECT * FROM `login` WHERE id=?;"
    const id = req.params.id
    conexao.query(sql, id, (error,result) =>{
        if(error){
            res.status(404).json({
                "erro": error
            })
        }else{
            res.status(200).json(result)
        }
    })
})

//adicionar login:
app.post("/cadastro", (req,res) => {
    const dadosLogin = req.body
    const sql = "INSERT INTO `login` SET ?"
    conexao.query(sql, dadosLogin, (error,result)=>{
        if(error){
            res.status(400).json({
                "erro": error
            })
        }else{
            res.status(200).json(result)
        }
    });
    res.status(201).send([dadosLogin])
})

//deletar login por id:
app.delete("/cadastro/:id", (req,res)=>{
    const id = req.params.id
    const sql = "DELETE FROM `login` WHERE id=?;"
    conexao.query(sql,id,(error,result)=>{
        if(error){
            res.status(400).json({
                "erro": error
            })
        }else{
            res.status(200).json(result)
        }
    })

})

//Atualiza login por id:
app.put("/cadastro/:id", (req,res) =>{
    const id = req.params.id
    const dadosLogin = req.body
    const sql = "UPDATE `login` SET ? WHERE id=?"

    conexao.query(sql, [dadosLogin,id], (error, result)=>{
        if(error){
            res.status(400).json({
                "erro": error
            })
        }else{
            res.status(200).json(result)
        }
    })
})
//app
export default app
