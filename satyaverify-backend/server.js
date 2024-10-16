const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

dotenv.config();  // Load .env variables

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;  // Access Mongo URI from .env
const newsApiKey = process.env.NEWS_API_KEY; // Access News API key from .env

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

// Trusted and blacklisted sources
const trustedSources = [
  'bbc.co.uk', 'nytimes.com', 'reuters.com', 'cnn.com', 'theguardian.com',
  'washingtonpost.com', 'forbes.com', 'bloomberg.com'
];

const blacklistedSources = [
  'fake-news-site.com', 'misleading-news.net', 'notarealnews.org'
];

// Function to check domain credibility
const checkDomainCredibility = (domain) => {
  if (trustedSources.includes(domain)) {
    return { score: 90, message: "This is a highly trusted source." };
  } else if (blacklistedSources.includes(domain)) {
    return { score: 10, message: "This source is known for misinformation." };
  } else {
    return { score: 50, message: "Source credibility is uncertain. Proceed with caution." };
  }
};

// Function to calculate credibility score based on articles and their sources
const calculateCredibilityScore = (articles) => {
  if (articles.length === 0) {
    return { score: 0, message: "No articles found, unable to verify credibility." };
  }

  let totalScore = 0;
  articles.forEach(article => {
    const articleDomain = new URL(article.url).hostname.replace('www.', '');
    const domainCredibility = checkDomainCredibility(articleDomain);
    totalScore += domainCredibility.score;
  });

  const averageScore = totalScore / articles.length;

  if (averageScore > 70) {
    return { score: 80, message: "This news is likely credible based on multiple sources." };
  } else if (averageScore > 40) {
    return { score: 50, message: "This news may have some credibility but should be verified further." };
  } else {
    return { score: 20, message: "This news is likely false or lacks verification." };
  }
};

// Route to verify news
app.post('/api/verify', async (req, res) => {
  const { link } = req.body;

  try {
    // Extract domain from the provided link
    const domain = new URL(link).hostname.replace('www.', '');

    // Search for articles from the News API using the domain
    const newsApiResponse = await axios.get(`https://newsapi.org/v2/everything?domains=${domain}&apiKey=${newsApiKey}`);
    const articles = newsApiResponse.data.articles;

    // Calculate credibility score based on the articles found
    const { score, message } = calculateCredibilityScore(articles);

    // Send response back with the score and message
    return res.json({
      credibilityScore: score,
      message: message,
      relatedArticles: articles
    });
  } catch (error) {
    console.error("Error verifying news link:", error);
    res.status(500).json({ error: "Server error while verifying news." });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
