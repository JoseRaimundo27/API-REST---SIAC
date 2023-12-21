import express from "express";
import cors from "cors";
import SelecaoController from "./app/controllers/LoginController.js";

const app = express();
const corss = cors();

app.use(express.json()) //Middleware
app.use(corss)

//Criando rotas de cadastro
app.get("/cadastro", SelecaoController.index)

//cadastro by ID:
app.get("/cadastro/:id",SelecaoController.show )

//adicionar login:
app.post("/cadastro", SelecaoController.store)

//deletar login por id:
app.delete("/cadastro/:id",SelecaoController.delete )

//Atualiza login por id:
app.put("/cadastro/:id", SelecaoController.update)
//app
export default app
