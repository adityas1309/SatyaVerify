import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [link, setLink] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [satisfaction, setSatisfaction] = useState(null); // State for satisfaction response
  const [counts, setCounts] = useState({ yes: 0, no: 0 }); // State for counts

  const handleSubmit = async () => {
    if (!link) {
      setError('Please enter a news link.');
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);
    setSatisfaction(null); // Reset satisfaction state

    try {
      const response = await axios.post('http://localhost:5000/api/verify', { link });
      setResult(response.data);
    } catch (error) {
      console.error("Error verifying link:", error);
      setError('Failed to verify the link. Please try again.');
    }
    setLoading(false);
  };

  const handleSatisfaction = async (response) => {
    try {
      const satisfactionResponse = await axios.post('http://localhost:5000/api/satisfaction', { response });
      setCounts(satisfactionResponse.data.satisfactionCounts); // Update counts state
      setSatisfaction(response); // Set satisfaction state
    } catch (error) {
      console.error("Error recording satisfaction response:", error);
      setError('Failed to record satisfaction response.');
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br h-screen w-screen justify-center from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="glass-card bg-white bg-opacity-10 shadow-xl rounded-xl p-8 w-full max-w-lg backdrop-blur-md">
        <h1 className="text-3xl font-extrabold text-center mb-4 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          SatyaVerify
        </h1>
        <p className="text-center mb-6 text-lg">Instantly verify the credibility of news articles</p>

        <div className="flex mb-6 space-x-2">
          <input
            type="text"
            className="flex-grow border border-transparent bg-gray-800 bg-opacity-50 rounded-l-md p-3 focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-gray-400 transition-all"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter news link"
            aria-label="News link input"
          />
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-md px-5 py-2 font-semibold hover:opacity-90 transition-opacity"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {result && (
          <div className="bg-gray-800 bg-opacity-50 p-5 rounded-md shadow-inner">
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Verification Results</h2>
            <p><strong>Credibility Score:</strong> {result.credibilityScore} / 100</p>
            <p><strong>Message:</strong> {result.message}</p>

            {/* Satisfaction question */}
            <div className="mt-4">
              <p className="text-lg">Are you satisfied with the results?</p>
              <div className="flex justify-center space-x-4 mt-2">
                <button onClick={() => handleSatisfaction('yes')} className="bg-green-500 text-white px-4 py-2 rounded">Yes</button>
                <button onClick={() => handleSatisfaction('no')} className="bg-red-500 text-white px-4 py-2 rounded">No</button>
              </div>
            </div>

            {satisfaction && (
              <p className="mt-4 text-center">
                Thank you for your feedback! You responded: <strong>{satisfaction}</strong>.
                <br />
                Current counts: Yes: {counts.yes}, No: {counts.no}
              </p>
            )}
          </div>
        )}
      </div>

      <footer className="mt-10">
        <p className="text-gray-400 text-sm tracking-wide">Stay aware, stay informed. Avoid fake news!</p>
      </footer>
    </div>
  );
};

export default Home;
