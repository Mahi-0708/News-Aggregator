import express from "express";
import Article from "../models/Article.js";
import { scrapeNews } from "../scraper.js";
import { analyzeSentiment } from "../services/gemini.js";

const router = express.Router();

// Fetch + Analyze + Save
router.get("/fetch", async (req, res) => {
  try {
    const scraped = await scrapeNews();

    for (const item of scraped) {
      const exists = await Article.findOne({ title: item.title });
      if (exists) continue;

      const ai = await analyzeSentiment(item.title);

      await Article.create({
        title: item.title,
        url: item.url,
        source: item.source,
        sentiment: ai.sentiment,
        sentimentScore: ai.score,
        category: ai.category
      });
    }

    res.json({ message: "News scraped, analyzed & stored" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all news
router.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.json(articles);
});

export default router;
