import conexao from "../database/conexao.js"
import LoginRepository from "../repositories/LoginRepository.js"

class LoginController {
    //mostra todos:
    index(req, res) {
        const result = LoginRepository.findAll()
        res.json(result)
    }
    //mostra por id:
    show(req, res) {
        const sql = "SELECT * FROM `login` WHERE id=?;"
        const id = req.params.id
        conexao.query(sql, id, (error, result) => {
            if (error) {
                res.status(404).json({
                    "erro": error
                })
            } else {
                res.status(200).json(result)
            }
        })
    }

    store(req, res) {
        const dadosLogin = req.body
        const sql = "INSERT INTO `login` SET ?"
        conexao.query(sql, dadosLogin, (error, result) => {
            if (error) {
                res.status(404).json({
                    "erro": error
                })
            } else {
                res.status(200).json(result)
            }
        });
        res.status(201).send([dadosLogin])
    }
    update(req, res) {
        const id = req.params.id
        const dadosLogin = req.body
        const sql = "UPDATE `login` SET ? WHERE id=?"

        conexao.query(sql, [dadosLogin, id], (error, result) => {
            if (error) {
                res.status(404).json({
                    "erro": error
                })
            } else {
                res.status(200).json(result)
            }
        })
    }
    delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM `login` WHERE id=?;"
        conexao.query(sql, id, (error, result) => {
            if (error) {
                res.status(404).json({
                    "erro": error
                })
            } else {
                res.status(200).json(result)
            }
        })

    }
}
// Singleton:
export default new LoginController()