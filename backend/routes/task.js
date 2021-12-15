import express from "express";
import task from "../controllers/task.js";
import auth from "../middlewares/auth.js";
import validId from "../middlewares/validId.js";
import formatFile from "../middlewares/formatFile.js";
import multiparty from "connect-multiparty";
const mult = multiparty();
const router = express.Router();

router.post("/saveTask", task.saveTask);
router.post("/saveTaskImg", mult, formatFile, task.saveTaskImg);
router.get("/listTask",  task.listTask);
router.put("/updateTask", task.updateTask);
router.delete("/deleteTask/:_id", task.deleteTask);

export default router;
