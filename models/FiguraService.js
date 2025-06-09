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

    calcularPerimetroHexagono(lados = 6, medida = 3) {
        let resultado = (lados * medida)
        return resultado
    }
    calcularPerimetroTrapecio(lados = 4, medida = 6) {
        let resultado = (lados * medida)
        return resultado
    }
    calcularPerimetroTriangulo(lados = 3, medida = 5) {
        let resultado = (lados * medida)
        return resultado
    }
}
export default FiguraService;