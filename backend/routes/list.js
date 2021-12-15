import express from "express";
import list from "../controllers/list.js";
import auth from "../middlewares/auth.js";
import validId from "../middlewares/validId.js";
import formatFile from "../middlewares/formatFile.js";
import multiparty from "connect-multiparty";
const mult = multiparty();
const router = express.Router();

router.post("/saveList/:_id",  list.saveList);
router.get("/listList/:_id",  list.listList);
router.put("/updatelist",  list.updateList);
router.delete("/deletelist/:_id",  validId, list.deleteList);

export default router;