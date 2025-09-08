import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// CREATE Menu
router.post("/", async (req, res) => {
  try {
    const { name, description, imageUrl } = req.body;
    const newMenu = await prisma.menu.create({
      data: { name, description, imageUrl },
    });
    res.json(newMenu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ All Menus
router.get("/", async (req, res) => {
  try {
    const menus = await prisma.menu.findMany();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ One Menu by ID
router.get("/:id", async (req, res) => {
  try {
    const menu = await prisma.menu.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!menu) return res.status(404).json({ error: "Menu not found" });
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE Menu
router.put("/:id", async (req, res) => {
  try {
    const { name, description, imageUrl } = req.body;
    const updatedMenu = await prisma.menu.update({
      where: { id: parseInt(req.params.id) },
      data: { name, description, imageUrl },
    });
    res.json(updatedMenu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE Menu
router.delete("/:id", async (req, res) => {
  try {
    await prisma.menu.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Menu deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;