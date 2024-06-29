import express from "express";
import CharacterController from "../../controllers/character.controller";

const router = express.Router();

router.post("/create", CharacterController.createCharacter);
router.get("/getall", CharacterController.getAllCharacters);
router.get("/get/:id", CharacterController.getCharacter);
router.put("/update/:id", CharacterController.updateCharacter);
router.delete("/delete/:id", CharacterController.deleteCharacter);

export default router;