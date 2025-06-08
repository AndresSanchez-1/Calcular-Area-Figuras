import FiguraService from "../models/FiguraService.js";
class FiguraController{

    FiguraServices=null;
    //constructor
    constructor(){
        this.FiguraServices=new FiguraService();
        this.formularioCalcularArea=this.formularioCalcularArea.bind(this);
        this.calcularAreaFiguras=this.calcularAreaFiguras.bind(this);
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
}
export default FiguraController;
