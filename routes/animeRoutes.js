import express from "express";
import Anime from "../models/anime.js";

const router = express.Router();

// GET /anime
router.get("/", async (req, res) => {
  try {
    const anime = await Anime.find();
    res.json(anime);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /anime/:id
router.get("/:id", async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);

    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    res.json(anime);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /anime
router.post("/", async (req, res) => {
  try {
    const newAnime = await Anime.create(req.body);
    res.status(201).json(newAnime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH /anime/:id
router.patch("/:id", async (req, res) => {
  try {
    const updatedAnime = await Anime.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedAnime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    res.json(updatedAnime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /anime/:id
router.delete("/:id", async (req, res) => {
  try {
    const deletedAnime = await Anime.findByIdAndDelete(req.params.id);

    if (!deletedAnime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    res.json({ message: "Anime deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
