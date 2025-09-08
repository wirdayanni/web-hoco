import express from "express";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

// Contoh: hanya admin yang sudah login (punya token valid) bisa akses
router.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: `Welcome to Admin Dashboard, ${req.user.username}!`,
    user: req.user, // { id, username, iat, exp }
  });
});

export default router;