import { Negociacao } from '../models/negociacao.js';
export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQunatidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQunatidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adicionar():void{
        const negociacao = this.criaNegociacao();
        this.limparFormulario();
        console.log(negociacao)
    }

    private criaNegociacao():Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade = parseInt(this.inputQunatidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);

    }

    private limparFormulario():void{
        this.inputData.value = '';
        this.inputQunatidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}