import Parser from "rss-parser";
const parser = new Parser();

export async function scrapeBBC() {
  const feed = await parser.parseURL(
    "https://feeds.bbci.co.uk/news/technology/rss.xml"
  );

  return feed.items.slice(0, 5).map(item => ({
    title: item.title,
    url: item.link,
    source: "BBC"
  }));
}
