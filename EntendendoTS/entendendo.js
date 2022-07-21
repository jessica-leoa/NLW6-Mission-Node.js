//Exemplo dos benefícios do type-script
;
// FUNCAO
// {email, nome, telefone} => da interface
function enviarEmail({ email, nome, telefone }) {
    console.log(`Olá ${nome} seu email é ${email} e seu telefona ${telefone}`);
}
;
// CHAMANDO A FUNCAO
//Minha funcao nao recebe mais 3 parametros,mas um objeto "usuario", como definido acima usando o conceito de interface
//OBS: Beneficios do TS é que quando vc utiliza funcoes com esses padroes os parametros passados sao autocomplete para quem for usar ele durante o desenvolcimento em equipe. As pessoas irao sabem exatamente os dados necessários.
enviarEmail({
    email: "jrss1@discente.ifpe.edu.br",
    nome: "Jéssica",
    //telefone: "(81)9999999",
});
/**
 O TYPE SCRIPT NAO É OBRIGATÓRIOS, MAS AJUDA SIGNIFICATIVAMENTE O GRUPOS NO QUISITO PRODUTIVIDADE, MAIS CLAREZA DOS PARAMETROS A SEREM PASSADOS PARA AS FUNCOES.
**/
