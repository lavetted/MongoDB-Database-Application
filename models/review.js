import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: [2, "Username must be at least 2 characters"],
      trim: true,
    },

    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be between 1 and 10"],
      max: [10, "Rating must be between 1 and 10"],
    },

    comment: {
      type: String,
      maxlength: [500, "Comment cannot exceed 500 characters"],
      trim: true,
    },

    // 🔥 Relationship to Anime
    animeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Anime",
      required: [true, "Review must belong to an anime"],
    },
  },
  {
    timestamps: true,
  },
);

// 📈 Index for fast review lookups by anime
reviewSchema.index({ animeId: 1 });

// Prevent same user reviewing same anime multiple times
reviewSchema.index({ animeId: 1, username: 1 }, { unique: true });

export default mongoose.model("Review", reviewSchema);
