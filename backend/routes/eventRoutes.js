import express from "express";
import multer from "multer";
import path from "path";
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  cb(ext ? null : new Error("Only images allowed"), ext);
};

const upload = multer({ storage, fileFilter });

// Create (multiple images)
router.post("/", upload.array("images", 10), createEvent);

// Read
router.get("/", getEvents);
router.get("/:id", getEventById);

// Update (can upload new images)
router.put("/:id", upload.array("images", 10), updateEvent);

// Delete
router.delete("/:id", deleteEvent);

export default router;