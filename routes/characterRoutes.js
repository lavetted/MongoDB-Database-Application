router.get("/:id/with-characters", async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id).lean();

    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    const characters = await Character.find({ animeId: anime._id });

    res.json({
      ...anime,
      characters,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
