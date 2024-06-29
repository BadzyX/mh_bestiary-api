import express from "express";
import MonterController from "../../controllers/monster.controller";

const router = express.Router();

router.post("/create", MonterController.createMonster);
router.get("/getall", MonterController.getAllMonsters);
router.get("/get/:id", MonterController.getMonster);
router.put("/update/:id", MonterController.updateMonster);
router.delete("/delete/:id", MonterController.deleteMonster);

export default router;