// Imports
import express from "express";
import mongoose from "mongoose";
import { logReq, globalErr } from "./middleware/middleware.js";
import dotenv from "dotenv";
import animeRoutes from "./routes/animeRoutes.js";
import characterRoutes from "./routes/characterRoutes.js";
import connectDB from "./db/conn.js";

// Setup

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();

// Middleware
app.use(logReq);

// Routes
app.use("/anime", animeRoutes);

// Global middleware
app.use(globalErr);

// Server Listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
