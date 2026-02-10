import mongoose from "mongoose";
import dotenv from "dotenv";
import Anime from "../models/anime.js";
import Character from "../models/character.js";
import Review from "../models/review.js";

import animeData from "./data.js";
import characterData from "./characterData.js";
import reviewData from "./reviewData.js";

dotenv.config();

async function seedDatabase() {
  console.log("🚀 Starting Seed");

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to DB");

    // Clear old data
    await Anime.deleteMany({});
    await Character.deleteMany({});
    await Review.deleteMany({});
    console.log("🗑️ Old data cleared");

    // Insert anime first
    const insertedAnime = await Anime.insertMany(animeData);
    console.log("🌱 Anime data inserted");

    // Grab an anime ID to link characters/reviews
    const animeId = insertedAnime[0]._id;

    // Attach animeId to characters
    const charactersWithId = characterData.map((c) => ({
      ...c,
      animeId,
    }));

    const reviewsWithId = reviewData.map((r) => ({
      ...r,
      animeId,
    }));

    await Character.insertMany(charactersWithId);
    await Review.insertMany(reviewsWithId);

    console.log("🎭 Characters & Reviews inserted");
    console.log("🎉 SEED COMPLETE");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seed Error:", err.message);
    process.exit(1);
  }
}

seedDatabase();
