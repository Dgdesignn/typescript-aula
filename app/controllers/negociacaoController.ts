import { DiasDaSemana } from '../enums/diasDaSemana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagemView.js';
import {NegociacoesViews} from '../views/negociacoesView.js'
export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQunatidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesViews = new NegociacoesViews('#negociacoesData')
    private mensagemView = new MensagemView('#mensagemView')

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQunatidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesViews.update(this.negociacoes)
    }

    adicionar():void{
        const negociacao = this.criaNegociacao();
        if(!this.diasUteis(negociacao.data)){
            this.mensagemView.update("Apenas dias úteis da semana")
            return ;
        }

        this.negociacoes.adicionar(negociacao);
        this.actualizarView('Negociação adicionada com sucesso');
        this.limparFormulario();
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
        this.inputQunatidade.value = '1';
        this.inputValor.value = '0,0';
        this.inputData.focus();
    }

    private actualizarView(mensagem:string):void{
        this.negociacoesViews.update(this.negociacoes)
        this.mensagemView.update(mensagem)
    }

    private diasUteis(data:Date):number{
        return (data.getDay()>DiasDaSemana.DOMINGO)&&(data.getDay()<DiasDaSemana.SABADO) ?1:0;
    }
}