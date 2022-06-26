
export class Negociacao{
;

    constructor(private _data:Date, private _quantdade:number, private _valor:number){

    }

    get quantdade():number{
        return this._quantdade;
    }
    get data():Date{
        const date = new Date(this._data.getTime());
        return date;
    }

    get valor():number{
        return this._valor;
    }

    get valume(){
        return this._valor * this._quantdade;
    }
}