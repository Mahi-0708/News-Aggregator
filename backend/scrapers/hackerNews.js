import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeHackerNews() {
  const { data } = await axios.get("https://news.ycombinator.com/");
  const $ = cheerio.load(data);

  const articles = [];

  $(".titleline a").each((i, el) => {
    articles.push({
      title: $(el).text(),
      url: $(el).attr("href"),
      source: "Hacker News"
    });
  });

  return articles.slice(0, 10);
}
