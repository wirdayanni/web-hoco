import express from "express";
import multer from "multer";
import path from "path";

import { 
  createEvent, 
  getEvents, 
  getEventById, 
  updateEvent, 
  deleteEvent 
} from "../controllers/eventController.js";

const router = express.Router();

// Setup Multer untuk upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => {
    const unique = Date.now() + path.extname(file.originalname);
    cb(null, unique);
  }
});
const upload = multer({ storage });

// Routes
router.post("/", upload.array("images", 10), createEvent);
router.get("/", getEvents);
router.get("/:id", getEventById);
router.put("/:id", upload.array("images", 10), updateEvent);
router.delete("/:id", deleteEvent);

export default router;