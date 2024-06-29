import express from "express";
import GameController from "../../controllers/game.controller";

const router = express.Router();

router.post("/create", GameController.createGame);
router.get("/getall", GameController.getAllGames);
router.get("/get/:id", GameController.getGame);
router.put("/update/:id", GameController.updateGame);
router.delete("/delete/:id", GameController.deleteGame);

export default router;