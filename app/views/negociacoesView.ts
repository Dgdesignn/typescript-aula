import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesViews {
    private element:HTMLElement;
    constructor(selector:string){
        this.element = document.querySelector(selector);
    }

    template(model:Negociacoes):string{
        
        return `
            <table class="table table-hover table-borderd">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        model.listar().map(data=>{
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat('pt-AO').format(data.data)}</td>
                                <td>${data.quantdade}</td>
                                <td>${data.valor}</td>
                            </tr>
                            `
                        }).join('')
                    
                    }

                     
                </tbody>
            </table>
        `
    }

    update(model:Negociacoes){
        this.element.innerHTML = this.template(model)
    }
}