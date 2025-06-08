class FiguraService{
    calcularAreaHexagono(base = 0, altura = 0) {
        let resultado = base * altura
        return resultado
    }
    calcularAreaTrapecio(base = 0, altura = 0) {
        let resultado = base * altura
        return resultado
    }
    calcularAreaTriangulo(base = 0, altura = 0) {
        let resultado = (base * altura) / 2;
        return resultado
    }
}
export default FiguraService;