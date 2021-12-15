import express from "express";
import proyect from "../controllers/proyect.js";

const router = express.Router();

router.post("/saveProyect", proyect.saveProyect);
router.get("/listProyectAdmin", proyect.listProyectAdmin);
router.get("/listProyectColab", proyect.listProyectAdmin);
router.put("/updateProyect", proyect.updateProyect);
router.delete("/deleteTask/:_id", proyect.deleteProyect);

export default router;