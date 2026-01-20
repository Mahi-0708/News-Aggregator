import { useEffect, useState } from "react";
import { getNews } from "./api";
import Filters from "./components/Filters";
import NewsCard from "./components/NewsCard";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("All");
  const [sentiment, setSentiment] = useState("All");
  const [lastUpdated, setLastUpdated] = useState("");

  const loadNews = async () => {
    const data = await getNews();
    setNews(data);

    const now = new Date();
    setLastUpdated(
      now.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    );
  };

  useEffect(() => {
    loadNews();
  }, []);

  const filteredNews = news.filter(item => {
    const categoryMatch =
      category === "All" || item.category === category;
    const sentimentMatch =
      sentiment === "All" || item.sentiment === sentiment;
    return categoryMatch && sentimentMatch;
  });

  return (
    <div className="container">
      <h1>📰 AI News Aggregator</h1>

      <div className="top-bar">
        <Filters
          selectedCategory={category}
          setSelectedCategory={setCategory}
          selectedSentiment={sentiment}
          setSelectedSentiment={setSentiment}
        />

        <div className="refresh-box">
          <button onClick={loadNews}>🔄 Refresh</button>
          {lastUpdated && (
            <span className="updated-time">
              Last updated: {lastUpdated}
            </span>
          )}
        </div>
      </div>

      {filteredNews.length === 0 && <p>No articles found</p>}

      {filteredNews.map(article => (
        <NewsCard key={article._id} article={article} />
      ))}
    </div>
  );
}

export default App;
