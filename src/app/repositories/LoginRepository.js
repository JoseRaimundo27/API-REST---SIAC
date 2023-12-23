import conexao from "../database/conexao.js"
class LoginRepository {
    //Regras genéricas do Mysql
    create(dadosLogin) {
        const sql = "INSERT INTO `login` SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, dadosLogin, (err, result) => {
                if (err) return reject("Não foi possível cadastrar")

                const resulJSON = JSON.parse(JSON.stringify(result))
                return resolve(resulJSON)
            })
        })
    }
    findAll() {
        const sql = "SELECT * FROM `login`;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (err, result) => {
                if (err) return reject("Não foi possível conectar ao banco de dados")

                const resulJSON = JSON.parse(JSON.stringify(result))
                return resolve(resulJSON)
            })
        })
    }
    findById(id) {
        const sql = "SELECT * FROM `login` WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if (error) return reject("Não foi possível encontrar o elemento pelo ID")
                const resulJSON = JSON.parse(JSON.stringify(result))
                return resolve(resulJSON)
            })
        })

    }
    update(dadosLogin, id) {
        const sql = "UPDATE `login` SET ? WHERE id=?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [dadosLogin, id], (error, result) => {
                if (error) return reject("Não foi possível editar")
                const resulJSON = JSON.parse(JSON.stringify(result))
                return resolve(resulJSON)
            })
        })
    }

    delete(id) {
        const sql = "DELETE FROM `login` WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if (error) return reject("Não foi possível apagar")
                const resulJSON = JSON.parse(JSON.stringify(result))
                return resolve(resulJSON)
            })
        })
    }
}
export default new LoginRepository();
