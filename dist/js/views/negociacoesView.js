export class NegociacoesViews {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
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
                    ${model.listar().map(data => {
            return `
                            <tr>
                                <td>${new Intl.DateTimeFormat('pt-AO').format(data.data)}</td>
                                <td>${data.quantdade}</td>
                                <td>${data.valor}</td>
                            </tr>
                            `;
        }).join('')}

                     
                </tbody>
            </table>
        `;
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
