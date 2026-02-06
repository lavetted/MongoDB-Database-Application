import express from "express";
import Character from "../models/character.js";
import Anime from "../models/anime.js";

const router = express.Router();

// GET /characters
router.get("/", async (req, res) => {
  try {
    const characters = await Character.find().populate("animeId", "title");
    res.json(characters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /characters/:id
router.get("/:id", async (req, res) => {
  try {
    const character = await Character.findById(req.params.id).populate(
      "animeId",
      "title",
    );

    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }

    res.json(character);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /characters
router.post("/", async (req, res) => {
  try {
    // make sure anime exists
    const animeExists = await Anime.findById(req.body.animeId);
    if (!animeExists) {
      return res.status(400).json({ message: "Invalid animeId" });
    }

    const newCharacter = await Character.create(req.body);
    res.status(201).json(newCharacter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH /characters/:id
router.patch("/:id", async (req, res) => {
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedCharacter) {
      return res.status(404).json({ message: "Character not found" });
    }

    res.json(updatedCharacter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /characters/:id
router.delete("/:id", async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);

    if (!deletedCharacter) {
      return res.status(404).json({ message: "Character not found" });
    }

    res.json({ message: "Character deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
