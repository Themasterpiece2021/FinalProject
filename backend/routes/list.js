import express from "express";
import list from "../controllers/list.js";
import auth from "../middlewares/auth.js";
import validId from "../middlewares/validId.js";
import formatFile from "../middlewares/formatFile.js";
import multiparty from "connect-multiparty";
const mult = multiparty();
const router = express.Router();

router.post("/saveList",  list.saveList);
router.get("/listList",  list.listList);
router.put("/updatelist",  list.updateList);
router.delete("/deletelist/:_id",  validId, list.deleteList);

export default list;