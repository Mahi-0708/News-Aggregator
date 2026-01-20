export default function Filters({
  selectedCategory,
  setSelectedCategory,
  selectedSentiment,
  setSelectedSentiment
}) {
  return (
    <div className="filters">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Technology">Technology</option>
        <option value="Business">Business</option>
        <option value="Politics">Politics</option>
        <option value="Sports">Sports</option>
        <option value="Health">Health</option>
      </select>

      <select
        value={selectedSentiment}
        onChange={(e) => setSelectedSentiment(e.target.value)}
      >
        <option value="All">All Sentiments</option>
        <option value="Positive">Positive</option>
        <option value="Neutral">Neutral</option>
        <option value="Negative">Negative</option>
      </select>
    </div>
  );
}
