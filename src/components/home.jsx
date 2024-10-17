import React, { useState } from 'react';
import axios from 'axios';

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
      setResult(response.data);
    } catch (error) {
      console.error("Error verifying link:", error);
      setError('Failed to verify the link. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">SatyaVerify</h1>
        <p className="text-center mb-4">Verify the credibility of news articles instantly</p>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-l-md p-2"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter news link"
            aria-label="News link input"
          />
          <button onClick={handleSubmit} className="bg-blue-500 text-white rounded-r-md px-4" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {result && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-lg font-semibold">Verification Results</h2>
            <p><strong>Credibility Score:</strong> {result.credibilityScore} / 100</p>
            <p><strong>Message:</strong> {result.message}</p>
          </div>
        )}
      </div>

      <footer className="mt-6">
        <p className="text-gray-600">Be Aware From Fake News!!</p>
      </footer>
    </div>
  );
};

export default Home;
