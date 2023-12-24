import mysql from "mysql"

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "siac-api"
})

conexao.connect()

export const consulta = (sql,valores="",mensagemReject)=>{
    return new Promise((resolve, reject) => {
        conexao.query(sql,valores, (err, result) => {
            if (err) return reject(mensagemReject)
            const resulJSON = JSON.parse(JSON.stringify(result))
            return resolve(resulJSON)
        })
    })

}

export default conexao
