import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: String,
  url: String,
  source: String,
  category: String,
  sentiment: String,
  sentimentScore: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Article", ArticleSchema);
