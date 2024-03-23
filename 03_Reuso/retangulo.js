class Retangulo extends Forma{
    constructor(base,altura){
        super(base)
        this.altura = altura;
    }

    imprimeForma() {
        try {
            alert(`Tipo de forma: ${this.tipoDeForma} ${this.cor} - Área: ${this.calculaArea()}`);
        } catch (error) {
            alert("O código está com erro");
        }
    }
}