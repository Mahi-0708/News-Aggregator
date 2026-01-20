# News-Aggregator
# 📰 Dynamic News Aggregator with Sentiment Analysis

## 📌 Overview
The **Dynamic News Aggregator with Sentiment Analysis** is a full-stack web application that automatically collects news articles from multiple high-profile sources, analyzes their sentiment and category, stores them in a database, and displays them in a clean, interactive user interface.

The system updates news automatically using background jobs and provides users with filters, sentiment indicators, and real-time refresh capabilities.

---

## 🚀 Features
- 🌍 Aggregates news from **multiple sources**  
  (Hacker News, BBC, Reuters, Google News, The Guardian, TechCrunch, etc.)
- 🤖 Sentiment analysis (Positive / Neutral / Negative)
- 🗂️ Topic/category classification
- 🗄️ MongoDB storage
- 🔄 Automatic updates every **3 hours** (cron job)
- 🔄 Manual refresh button (UI-only)
- 🕒 Last updated **date & time** indicator
- 🎛️ Filters by **category** and **sentiment**
- 💎 Clean, modern, responsive UI

---

## 🧰 Tech Stack

### Frontend
- React.js
- CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Cheerio (HTML scraping)
- RSS Parser
- Node-Cron (scheduler)

### AI Integration
- Google Gemini API (architecture ready)
- Local sentiment analysis fallback for reliability

---

## 🏗️ System Architecture

The application follows a **modular full-stack architecture** where data flows from multiple news sources to the frontend through a structured backend pipeline.

### 🔁 Architecture Flow
📡 API Endpoints
Method	Endpoint	Description
GET	/api/news	Retrieve all stored news articles
GET	/api/news/fetch	Optional manual fetch (testing only)

🔹 Backend Commands
cd backend
npm install
npm run dev
Backend runs at:

http://localhost:5000
🔹 Frontend Commands
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173
