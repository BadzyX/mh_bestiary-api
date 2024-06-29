import express from "express";
import MerchantController from "../../controllers/merchant.controller";

const router = express.Router();

router.post("/create", MerchantController.createMerchant);
router.get("/getall", MerchantController.getAllMerchants);
router.get("/get/:id", MerchantController.getMerchant);
router.put("/update/:id", MerchantController.updateMerchant);
router.delete("/delete/:id", MerchantController.deleteMerchant);

export default router;