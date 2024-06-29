import express from "express";
import PlaceRoute from "../../controllers/place.route";

const router = express.Router();

router.post("/create", PlaceRoute.createPlace);
router.get("/getall", PlaceRoute.getAllPlaces);
router.get("/get/:id", PlaceRoute.getPlace);
router.put("/update/:id", PlaceRoute.updatePlace);
router.delete("/delete/:id", PlaceRoute.deletePlace);

export default router;