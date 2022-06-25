import { Negociacao } from './negociacao';

export class Negociacoes{
    private negociacoes: Negociacao[] = []

    constructor(){
        
    }

    adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    listar(): readonly Negociacao[] {
        return this.negociacoes
    }
}


