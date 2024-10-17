
# SatyaVerify

SatyaVerify is a news credibility verification tool built using **React.js** for the frontend, **Node.js/Express** for the backend, **MongoDB Atlas** for database storage, and the **News API** for retrieving related articles. It allows users to check the trustworthiness of news articles by verifying them against credible sources and calculating a credibility score.

## Folder Structure

```
C:.
│   .env                    # Environment variables (e.g., MongoDB URI, News API key)
│   .gitignore               # Ignored files for version control
│   package-lock.json        # Dependency lock file
│   package.json             # Node.js dependencies and scripts
│   postcss.config.js        # PostCSS configuration for Tailwind CSS
│   README.md                # Project documentation
│   server.js                # Express.js backend server
│   tailwind.config.js       # Tailwind CSS configuration
│
├───public
│       favicon.ico          # Browser tab icon
│       index.html           # Main HTML file for the frontend
│       logo.png             # App logo
│       logo192.png          # Icons for different devices
│       logo512.png
│       manifest.json        # Web App Manifest
│       robots.txt           # Instructions for web crawlers
│
└───src
    │   App.css              # Global styles for the React app
    │   App.js               # Main React component
    │   App.test.js          # Testing file for the App component
    │   index.css            # Additional CSS for the app
    │   index.js             # Entry point of the React app
    │   logo.svg             # SVG version of the app logo
    │   reportWebVitals.js   # Performance measurement
    │   setupTests.js        # Setup for testing with Jest
    │
    └───components
            home.jsx         # React component for the Home page
            LandingPage.jsx  # React component for the Landing page
```

## Features

- **Verify News Credibility**: Input a news link and get a credibility score.
- **Cross-reference with News API**: Compare the news article with trusted sources.
- **Frontend**: Built with React and styled using Tailwind CSS.
- **Backend**: Built with Node.js and Express.
- **Database**: MongoDB Atlas for storing user-related data.
- **API Integration**: News API used for searching news articles.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js/Express
- **Database**: MongoDB Atlas
- **External API**: News API
- **Deployment**: Vercel (Frontend), Local Machine (Backend)

---

## Getting Started

### Prerequisites

Ensure the following are installed on your machine:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** or **yarn**: Installed with Node.js
- **MongoDB Atlas**: You will need a MongoDB Atlas connection URI.
- **News API Key**: Sign up at [News API](https://newsapi.org/) to get an API key.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/satyaverify.git
   cd satyaverify
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster0.mongodb.net/satyaverify?retryWrites=true&w=majority
   NEWS_API_KEY=your_news_api_key
   PORT=5000
   ```

   Replace `<your_username>`, `<your_password>`, and `your_news_api_key` with your MongoDB credentials and News API key.

### Running the Application

#### Backend (Express server)

1. Start the backend server:
   ```bash
   cd satyaverify
   node server.js
   ```

2. The backend server should now be running on `http://localhost:5000` and connected to MongoDB.

#### Frontend (React app)

1. Navigate to the **React frontend**:
   ```bash
   cd satyaverify
   ```

2. Start the React app:
   ```bash
   npm start
   ```

3. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

### Running on Vercel

You can deploy the frontend using **Vercel**:

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and connect your repository.
3. Deploy the frontend with Vercel.

Make sure to set up the environment variables (MongoDB URI, News API key) on Vercel for backend connections.

---

## How It Works

1. **User Input**: Users input a link to the news article they want to verify.
2. **API Call**: The backend retrieves articles from the News API based on the domain of the provided link.
3. **Credibility Score**: The credibility score is calculated based on the number of related articles from trusted sources.
4. **Response**: The user receives a score and message indicating the credibility of the news.

---

## Contact

- Project Maintainer: Aditya Singh
- GitHub: [adityas1309](https://github.com/adityas1309)
