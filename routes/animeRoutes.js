import express from "express";
import Anime from "../models/anime.js";
import Character from "../models/character.js";

const router = express.Router();

// GET all anime
router.get("/", async (req, res) => {
  const anime = await Anime.find();
  res.json(anime);
});

// POST new anime
router.post("/", async (req, res) => {
  try {
    const newAnime = await Anime.create(req.body);
    res.status(201).json(newAnime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
