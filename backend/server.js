import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import menuRoutes from "./routes/menuRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// Auth (register/login)
app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/menus", menuRoutes);

app.get("/", (_, res) => res.send("HOCO Backend is running 🚀"));

app.listen(process.env.PORT || 5000, () =>
  console.log(`✅ Server running on http://localhost:${process.env.PORT || 5000}`)
);
