import { Negociacoes } from "../models/negociacoes.js";
import { View } from './view.js';

export class NegociacoesViews extends View<Negociacoes>{
    

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


}