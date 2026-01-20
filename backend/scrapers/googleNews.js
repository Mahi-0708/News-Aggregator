import Parser from "rss-parser";
const parser = new Parser();

export async function scrapeGoogleNews() {
  const feed = await parser.parseURL(
    "https://news.google.com/rss/search?q=technology"
  );

  return feed.items.slice(0, 5).map(item => ({
    title: item.title,
    url: item.link,
    source: "Google News"
  }));
}
