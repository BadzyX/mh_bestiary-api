import express from "express";
import WeaponRoute from "../../controllers/weapon.route";

const router = express.Router();

router.post("/create", WeaponRoute.createWeapon);
router.get("/getall", WeaponRoute.getAllWeapons);
router.get("/get/:id", WeaponRoute.getWeapon);
router.put("/update/:id", WeaponRoute.updateWeapon);
router.delete("/delete/:id", WeaponRoute.deleteWeapon);

export default router;