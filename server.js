import app from "./src/app.js" //Importando objeto app
import conexao from "./infra/conexao.js"

//realizar a conexão:
conexao.connect((error) =>{
    if(error){
        console.log(error)
    }else{
        console.log("Conexão realizada com sucesso!")
        app.listen(3000, () =>{
            console.log("Servidor iniciado na porta 3000")
        })
    }
})
