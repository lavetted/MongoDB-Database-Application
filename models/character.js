import mongoose from "mongoose";

const characterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Character name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
      trim: true,
    },

    role: {
      type: String,
      trim: true,
    },

    powerLevel: {
      type: Number,
      min: [0, "Power level cannot be negative"],
    },

    isMainCharacter: {
      type: Boolean,
      default: false,
    },

    // 🔥 Relationship to Anime collection
    animeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Anime",
      required: [true, "Character must belong to an anime"],
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  },
);

// 📈 Index for faster lookups by anime
characterSchema.index({ animeId: 1 });

export default mongoose.model("Character", characterSchema);
