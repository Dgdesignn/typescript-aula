export class Negociacao {
    constructor(_data, _quantdade, _valor) {
        this._data = _data;
        this._quantdade = _quantdade;
        this._valor = _valor;
    }
    ;
    get quantdade() {
        return this._quantdade;
    }
    get data() {
        const date = new Date(this._data.getDate());
        return date;
    }
    get valor() {
        return this._valor;
    }
    get valume() {
        return this._valor * this._quantdade;
    }
}
