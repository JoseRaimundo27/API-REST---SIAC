import conexao from "../database/conexao.js"
class LoginRepository{
    //Regras genéricas do Mysql
    create(){}

    findAll(){
        const sql = "SELECT * FROM `login`;"
        conexao.query(sql, (error, result) => {
            if (error) {
                return error
            } else {
                return result
            }
        })
    }
    findById(){}
    update(){}
    delete(){}
    
}
export default new LoginRepository();