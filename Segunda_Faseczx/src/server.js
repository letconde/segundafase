/* ARQUIVO CRIADO PARA SETAR O SERVIDOR */


/* IMPORTANDO O express, cors E O routes */
import express from 'express';
import cors from 'cors';
import routes from './routes.js';



/* CRIANDO E CONFIGURANDO O SERVIDOR */
const server = express();  
server.use(cors());                                     /* ADICIONANDO O "cors" PARA O SERVIDOR */
server.use(express.urlencoded({extended:true}));        /* ADICIONANDO E CONFIGURANDO O "express" AO SERVIDOR */

server.use('/api', routes);                             /* ADICIONANDO O "routes" E CONFIGURANDO ROTA PADRÃO */

server.listen(3000, () => {                             /* SELECIONANDO A PORTA QUE DEVE SER ABERTA PELO SERVIDOR */
    console.log(`Servidor rodando em http://localhost:3000`);
})
