

/* PARA IMPORTAR O "MYSQLl2" (BANCO DE DADOS)  */
import mysql from 'mysql2';


/* PARA FAZER A CONEXÃO COM O BANCO DE DADOS "mysql2" */
const connection = mysql.createConnection({
    host: 'localhost',      /* DEFININDO LOCAL ONDE SERÁ IMPORTADO O SITE PARA SER HOSPEDADO (host) */
    user: 'root',           /* DEFININDO NOME PARA A PESSOA QUE IRÁ ADMINISTRAR E ACESSAR O BANCO DE DADOS */
    password: 'Admin@123',  /* DEFININDO UMA SENHA PARA O ADMINSTRADOR CONSEGUIR ACESSO AO BANCO DE DADOS E CASO NÃO SEJA DECIDIDA UMA SENHA O LOCAL DEVE SER DEIXADO EM BRANCO (POUCA SEGURANÇA) */
    database: 'lojadb'      /* DEFININDO UM NOME PARA RECONHECER O BANCO DE DADOS */
});


/* VERIFICA SE A CONEXÃO COM O BANCO DEU CERTO */
connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: lojadb } `);
});

export default connection;