import cron from "node-cron";
import { scrapeNews } from "./scraper.js";
import Article from "./models/Article.js";
import { analyzeSentiment } from "./services/gemini.js";

const runJob = async () => {
  console.log("⏳ Running automatic news fetch...");

  const scraped = await scrapeNews();

  for (const item of scraped) {
    const exists = await Article.findOne({ title: item.title });
    if (exists) continue;

    const analysis = await analyzeSentiment(item.title);

    await Article.create({
      title: item.title,
      url: item.url,
      source: item.source,
      sentiment: analysis.sentiment,
      sentimentScore: analysis.score,
      category: analysis.category
    });
  }

  console.log(" News updated automatically");
};

//  EVERY DAY — EVERY 3 HOURS
cron.schedule("0 */3 * * *", runJob);

runJob();
