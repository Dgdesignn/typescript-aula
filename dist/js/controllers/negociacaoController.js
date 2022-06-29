import { DiasDaSemana } from '../enums/diasDaSemana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagemView.js';
import { NegociacoesViews } from '../views/negociacoesView.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesViews = new NegociacoesViews('#negociacoesData');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQunatidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesViews.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        if (!this.diasUteis(negociacao.data)) {
            this.mensagemView.update("Apenas dias úteis da semana");
            return;
        }
        this.negociacoes.adicionar(negociacao);
        this.actualizarView('Negociação adicionada com sucesso');
        this.limparFormulario();
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
        this.inputQunatidade.value = '1';
        this.inputValor.value = '0,0';
        this.inputData.focus();
    }
    actualizarView(mensagem) {
        this.negociacoesViews.update(this.negociacoes);
        this.mensagemView.update(mensagem);
    }
    diasUteis(data) {
        return (data.getDay() > DiasDaSemana.DOMINGO) && (data.getDay() < DiasDaSemana.SABADO) ? 1 : 0;
    }
}
