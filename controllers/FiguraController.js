import FiguraService from "../models/FiguraService.js";
class FiguraController{

    FiguraServices=null;
    //constructor
    constructor(){
        this.FiguraServices=new FiguraService();
        this.formularioCalcularArea=this.formularioCalcularArea.bind(this);
        this.calcularAreaFiguras=this.calcularAreaFiguras.bind(this);
        this.formularioCalcularPerimetro=this.formularioCalcularPerimetro.bind(this);
        this.calcularPerimetroFiguras=this.calcularPerimetroFiguras.bind(this);
    }

    //accesores

    //metodo calcular area
    formularioCalcularArea(req,resp){
        resp.render('area');

    }
    calcularAreaFiguras(req,resp){
        const { figura, base, altura }=req.body;
        let resultado;
        if(figura==='Hexagono'){
            resultado=this.FiguraServices.calcularAreaHexagono(base,altura);
        } else if(figura==='Trapecio'){
            resultado=this.FiguraServices.calcularAreaTrapecio(base,altura);
        } else if(figura==='Triangulo'){
            resultado=this.FiguraServices.calcularAreaTriangulo(base,altura);
        }
        resp.render('area',{resultado});
    }
    
    formularioCalcularPerimetro(req,resp){
        resp.render('Perimetro');

    }
    calcularPerimetroFiguras(req,resp){
        const { figura, lados, medida }=req.body;
        let resultado;
        if(figura==='Hexagono'){
            resultado=this.FiguraServices.calcularPerimetroHexagono(lados,medida);
        } else if(figura==='Trapecio'){
            resultado=this.FiguraServices.calcularPerimetroTrapecio(lados,medida);
        } else if(figura==='Triangulo'){
            resultado=this.FiguraServices.calcularPerimetrosTriangulo(lados,medida);
        }
        resp.render('Perimetro',{resultado});
    }
}
export default FiguraController;
