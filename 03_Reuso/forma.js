class Forma {
    constructor() {
        this.tipoDeForma = 'Quadrado';
    }

    imprimeForma() {
        try {
            alert(`Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
        } catch (error) {
            alert("O código está com erro");
        }
    }

    calculaArea() {
        throw new Error('O método calculaArea() deve ser implementado na subclasse.');
    }
}