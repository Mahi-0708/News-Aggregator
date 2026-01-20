export async function analyzeSentiment(title) {
  const positiveWords = ["good", "great", "success", "growth", "win", "ai", "launch"];
  const negativeWords = ["bad", "loss", "fail", "crash", "layoff", "decline"];

  let score = 0;

  const lowerTitle = title.toLowerCase();

  positiveWords.forEach(word => {
    if (lowerTitle.includes(word)) score += 0.2;
  });

  negativeWords.forEach(word => {
    if (lowerTitle.includes(word)) score -= 0.2;
  });

  let sentiment = "Neutral";
  if (score > 0.1) sentiment = "Positive";
  if (score < -0.1) sentiment = "Negative";

  let category = "Technology";
  if (lowerTitle.includes("market")) category = "Business";
  if (lowerTitle.includes("election")) category = "Politics";
  if (lowerTitle.includes("match")) category = "Sports";

  return {
    sentiment,
    score: Math.max(-1, Math.min(1, score)),
    category
  };
}
