import React, { useState } from 'react';
import axios from 'axios';
import '../pages/home.css';  // CSS file for styling

const Home = () => {
  const [link, setLink] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!link) {
      setError('Please enter a news link.');
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);
    
    try {
      const response = await axios.post('http://localhost:5000/api/verify', { link });
      setResult(response.data);  // Save the result to state
    } catch (error) {
      console.error("Error verifying link:", error);
      setError('Failed to verify the link. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <iframe 
        src='https://my.spline.design/interfaceii-fc8c1607d8e544e8fdb37ffb4dac12ad/' 
        frameBorder='0' 
        width='100%' 
        height='100%' 
        className="spline-background"
        title="Spline Background"
      ></iframe>

      <div className="content">
        <h1 className="title">SatyaVerify</h1>
        <p className="subtitle">Verify the credibility of news articles instantly</p>

        <div className="input-group">
          <input
            type="text"
            className="input-box"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter news link"
            aria-label="News link input"
          />
          <button onClick={handleSubmit} className="verify-button" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {result && (
          <div className="result">
            <h2>Verification Results</h2>
            <p><strong>Credibility Score:</strong> {result.credibilityScore} / 100</p>
            <p><strong>Message:</strong> {result.message}</p>
          </div>
        )}
      </div>

      <footer className="footer">
        <p>Be Aware From Fake News!!</p>
      </footer>
    </div>
  );
};

export default Home;
