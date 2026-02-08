import mongoose from "mongoose";
import dotenv from "dotenv";
import Anime from "../models/anime.js";
import data from "./data.js";

dotenv.config();

async function seedDatabase() {
  console.log("🚀 Starting Seed");
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to DB");

    await Anime.deleteMany({});
    console.log("🗑️ Old anime removed");

    await Anime.insertMany(data);
    console.log("🌱 Anime data inserted");

    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

seedDatabase();
