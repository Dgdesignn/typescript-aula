export class Negociacao{
    private _data;
    private _quantdade;
    private _valor;

    constructor(data, quantdade, valor){
        this._data = data;
        this._quantdade = quantdade;
        this._valor = valor;
    }

    get quantdade(){
        return this._quantdade;
    }
    get data(){
        return this._data;
    }
    get valor(){
        return this._valor;
    }

    get valume(){
        return this._valor * this._quantdade;
    }
}