import Parser from "rss-parser";
const parser = new Parser();

export async function scrapeTechCrunch() {
  const feed = await parser.parseURL("https://techcrunch.com/feed/");
  return feed.items.slice(0, 5).map(item => ({
    title: item.title,
    url: item.link,
    source: "TechCrunch"
  }));
}
