import {Router} from "express"
import LoginController from "../controllers/LoginController.js"

const router = Router()

//Criando rotas de cadastro
router.get("/cadastro", LoginController.index)

//cadastro by ID:
router.get("/cadastro/:id",LoginController.show )

//adicionar login:
router.post("/cadastro", LoginController.store)

//deletar login por id:
router.delete("/cadastro/:id",LoginController.delete )

//Atualiza login por id:
router.put("/cadastro/:id", LoginController.update)

export default router
