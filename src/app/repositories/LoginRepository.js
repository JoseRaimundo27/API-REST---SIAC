import {consulta} from "../database/conexao.js"

class LoginRepository {
    //Regras genéricas do Mysql
    create(dadosLogin) {
        const sql = "INSERT INTO `login` SET ?"
        return consulta(sql,dadosLogin, "Não foi possivel cadastrar")
    }
    findAll() {
        const sql = "SELECT * FROM `login`;"
        return consulta(sql, "Não foi possível encontrar login")
    }
    findById(id) {
        const sql = "SELECT * FROM `login` WHERE id=?;"
        return consulta(sql,id,"Não foi possível achar seleção pelo id")
    }
    update(dadosLogin, id) {
        const sql = "UPDATE `login` SET ? WHERE id=?"
        return consulta(sql, [dadosLogin,id], "Não foi possível atualizar")
    }
    delete(id) {
        const sql = "DELETE FROM `login` WHERE id=?;"
        return consulta(sql, id, "Não foi possível deletar")
    }
}
export default new LoginRepository();
