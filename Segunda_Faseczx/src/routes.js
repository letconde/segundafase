
/* IMPORTANDO O "express" */
import express from 'express';

/* ATRIBUINDO OS DADOS DO "express" PARA A CONSTANTE "router" */
const router = express.Router();


/* IMPORTANDO TODAS AS FUNÇÕES QUE FORAM CRIADAS E DEFINIDAS */
import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';


/* CONFIGURAN AS ROTAS CRIADAS */
router.get('/clientes', buscarTodos);
router.get('/cliente/:Id_Cliente', buscarUm);
router.post('/cliente', inserir);
router.put('/cliente/:Id_Cliente', alterar);
router.delete('/cliente/:Id_Cliente', excluir);

export { router as default};