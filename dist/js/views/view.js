export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        throw Error("Precisas implementar a class template!");
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
