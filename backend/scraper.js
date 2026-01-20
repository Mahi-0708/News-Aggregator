import { scrapeHackerNews } from "./scrapers/hackerNews.js";
import { scrapeTechCrunch } from "./scrapers/techCrunch.js";
import { scrapeBBC } from "./scrapers/bbc.js";
import { scrapeReuters } from "./scrapers/reuters.js";
import { scrapeGoogleNews } from "./scrapers/googleNews.js";

export async function scrapeNews() {
  const results = await Promise.allSettled([
    scrapeHackerNews(),
    scrapeTechCrunch(),
    scrapeBBC(),
    scrapeReuters(),
    scrapeGoogleNews()
  ]);

  return results
    .filter(r => r.status === "fulfilled")
    .flatMap(r => r.value);
}