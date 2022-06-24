export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQunatidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adicionar() {
        console.log(this.inputData);
        console.log(this.inputQunatidade);
        console.log(this.inputValor);
    }
}
