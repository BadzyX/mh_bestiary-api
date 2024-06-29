import express from "express";
import MapController from "../../controllers/map.controller";

const router = express.Router();

router.post("/create", MapController.createMap);
router.get("/getall", MapController.getAllMaps);
router.get("/get/:id", MapController.getMap);
router.put("/update/:id", MapController.updateMap);
router.delete("/delete/:id", MapController.deleteMap);

export default router;