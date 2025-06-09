import { Router } from "express";
import FiguraController from "../controllers/FiguraController.js ";

const router = Router();
const figuraController = new FiguraController();

router.get('/', figuraController.formularioCalcularArea.bind (figuraController));
router.post('/calcular', figuraController.calcularAreaFiguras.bind (figuraController));
router.get('/', figuraController.formularioCalcularPerimetro.bind (figuraController));
router.post('/calcular', figuraController.calcularPerimetroFiguras.bind (figuraController));

export default router;