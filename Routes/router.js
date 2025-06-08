import { Router } from "express";
import FiguraController from "../controllers/FiguraController.js";

const router = Router();
const figuraController = new FiguraController();

router.get('/', figuraController.formularioCalcularArea.bind (figuraController));
router.post('/calcular', figuraController.calcularAreaFiguras.bind (figuraController));

export default router;