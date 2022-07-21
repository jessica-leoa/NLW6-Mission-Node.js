import express from "express";

//Inicializando o Express
//@types/express
const app = express()

/*
*  ======== MÉTODOS PARA USAR COM HTTP ========
* GET    => BUSCAR INFORMACAO
* POST   => INSERIR(CRIAR) INFORMACAO
* PUT    => ALTERAR INFORMACAO
* DELETE => REMOVER UM DADO
* PATCH  => ALTERAR UMA FORMACAO ESPECÍFICA DENTRO DE UM OBJETO
*/

//Criando a primeira rota
app.get("/test", (req, res) => {
  //req => entrada da func
  //res => saida da func
  return res.send("Hello World!");
});

//O método poste posso ver pelo insomnia já que no browser nao roda esse método
app.post("/test-post", (req, res) => {
  return res.send("Método poste funcionando");
})

//Criando o servidor pra conseuir utilizar
// http://localhost:3000
app.listen(3000, () => console.log("Server is running NLW"));
