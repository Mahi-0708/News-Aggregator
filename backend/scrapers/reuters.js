import Parser from "rss-parser";
const parser = new Parser();

export async function scrapeReuters() {
  const feed = await parser.parseURL(
    "https://www.reuters.com/rssFeed/technologyNews"
  );

  return feed.items.slice(0, 5).map(item => ({
    title: item.title,
    url: item.link,
    source: "Reuters"
  }));
}
