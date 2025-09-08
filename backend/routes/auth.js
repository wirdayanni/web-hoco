// routes/auth.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// REGISTER
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    // cek user sudah ada
    const existingUser = await prisma.admin.findUnique({
      where: { username },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // simpan ke DB
    await prisma.admin.create({
      data: { username, password: hashedPassword },
    });

    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.admin.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;