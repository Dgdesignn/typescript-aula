import { NegociacaoController } from './controllers/negociacaoController.js';
//all class instance 
const negociacaoController = new NegociacaoController();
//implamentation
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    negociacaoController.adicionar();
});
