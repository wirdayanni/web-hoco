import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// GET all locations
router.get("/", async (req, res) => {
  try {
    const locations = await prisma.location.findMany();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;