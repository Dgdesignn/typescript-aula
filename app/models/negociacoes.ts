import { Negociacao } from './negociacao';

export class Negociacoes{
    private negociacoes: Array<Negociacao> = []

    constructor(){
        
    }

    adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    listar(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }
}


