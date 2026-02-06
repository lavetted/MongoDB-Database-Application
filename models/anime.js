import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  genre: {
    type: [String],
    required: true,
  },
  episodes: {
    type: Number,
    min: 1,
  },
  status: {
    type: String,
    enum: ["Ongoing", "Finished"],
  },
  releaseYear: {
    type: Number,
    min: 1950,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  studio: String,
});

export default mongoose.model("Anime", animeSchema);
