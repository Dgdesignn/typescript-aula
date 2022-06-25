
export class Negociacao{
    private _data: Date;
    private _quantdade: number;
    private _valor: number;

    constructor(data:Date, quantdade:number, valor:number){
        this._data = data;
        this._quantdade = quantdade;
        this._valor = valor;
    }

    get quantdade():number{
        return this._quantdade;
    }
    get data():Date{
        return this._data;
    }
    get valor():number{
        return this._valor;
    }

    get valume(){
        return this._valor * this._quantdade;
    }
}