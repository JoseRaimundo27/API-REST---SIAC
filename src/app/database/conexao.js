import mysql from "mysql"

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "siac-api"
})

conexao.connect()

export default conexao