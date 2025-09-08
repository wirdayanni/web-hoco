import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import menuRoutes from "./routes/menuRoutes.js";
import eventRoutes from "./routes/eventRoutes.js"
import locationRoutes from "./routes/locationRoutes.js"

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

// Auth (register/login)
app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/menus", menuRoutes);

app.use("/uploads", express.static("uploads"));

app.use("/api/events", eventRoutes);

app.use("/api/locations", locationRoutes);

app.get("/", (_, res) => res.send("HOCO Backend is running..."));

app.listen(process.env.PORT || 5000, () =>
  console.log(`✅ Server running on http://localhost:${process.env.PORT || 5000}`)
);