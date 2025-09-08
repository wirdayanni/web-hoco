import express from "express";
import {
    createMenu,
    getMenus,
    getMenuById,
    updateMenu,
    deleteMenu,
} from "../controllers/menuController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getMenus);
router.get("/:id", getMenuById);
router.post("/", upload.single("image"), createMenu);
router.put("/:id", upload.single("image"), updateMenu);
router.delete("/:id", deleteMenu);

export default router;