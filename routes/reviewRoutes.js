import express from "express";
import Review from "../models/review.js";
import Anime from "../models/anime.js";

const router = express.Router();

// GET /reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().populate("animeId", "title");
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /reviews/:id
router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate(
      "animeId",
      "title",
    );

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /reviews
router.post("/", async (req, res) => {
  try {
    // Check if anime exists
    const animeExists = await Anime.findById(req.body.animeId);
    if (!animeExists) {
      return res.status(400).json({ message: "Invalid animeId" });
    }

    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH /reviews/:id
router.patch("/:id", async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json(updatedReview);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /reviews/:id
router.delete("/:id", async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);

    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
