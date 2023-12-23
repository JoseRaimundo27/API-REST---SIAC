import LoginRepository from "../repositories/LoginRepository.js"

class LoginController {
    //mostra todos:
    async index(req, res) {
        const result = await LoginRepository.findAll()
        res.json(result)
    }
    //mostra por id:
    async show(req, res) {
        const id = req.params.id
        const result = await LoginRepository.findById(id)
        res.json(result)
    }
    async store(req, res) {
        const dadosLogin = req.body
        const result = await LoginRepository.create(dadosLogin)
        res.json(result) 
        
    }
    async update(req, res) {
        const id = req.params.id
        const dadosLogin = req.body
        const result = await LoginRepository.update(dadosLogin,id)
        res.json(result) 
    }
    async delete(req, res) {
        const id = req.params.id
        const result = await LoginRepository.delete(id)
        res.json(result) 
    }
}
// Singleton:
export default new LoginController()