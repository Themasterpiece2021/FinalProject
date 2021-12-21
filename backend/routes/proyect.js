import express from "express";
import proyect from "../controllers/proyect.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";

const router = express.Router();

router.post("/saveProyect", auth, proyect.saveProyect);
router.get("/listProyectAdmin", auth, proyect.listProyectAdmin);
router.get("/listProyectColab", auth, proyect.listProyectColab);
router.put("/updateProyect", auth, proyect.updateProyect);
router.delete("/deleteTask/:_id", auth, proyect.deleteProyect);
router.put("/updateCollaborators/:_id",auth, proyect.updateCollaborators);


export default router;
