import conexao from "../database/conexao.js"
class LoginRepository {
    //Regras genéricas do Mysql
    create() { }

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
        return new Promise((resolve,reject)=>{
            conexao.query(sql, id, (error, result) =>{
                if(error) return reject("Não foi possível conectar ao banco de dados")
                const resulJSON = JSON.parse(JSON.stringify(result))
                return resolve(resulJSON)
            })
        })
        
    }
    update() { }
    delete() { }

}
export default new LoginRepository();