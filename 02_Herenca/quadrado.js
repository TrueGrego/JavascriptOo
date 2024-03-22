class Quadrado extends Forma {

    constructor(lado) {
        super();
        this.tipoDaForma = "quadrado";
        this.lado = lado;
    }

    calculaArea() {
        return this.lado * this.lado;
    }

}