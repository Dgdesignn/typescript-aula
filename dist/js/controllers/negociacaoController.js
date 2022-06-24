import { Negociacao } from '../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQunatidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        this.limparFormulario();
        console.log(negociacao);
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQunatidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQunatidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
