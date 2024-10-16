import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  // Using useLocation to access state passed via React Router from the Home page
  const location = useLocation();
  const { link, credibilityScore, message } = location.state || {};

  return (
    <div style={styles.container}>
      <h1>Verification Results</h1>

      {link ? (
        <>
          <div style={styles.resultBox}>
            <h3>News Link:</h3>
            <p>{link}</p>
          </div>

          <div style={styles.resultBox}>
            <h3>Credibility Score:</h3>
            <p style={credibilityScore > 50 ? styles.positiveScore : styles.negativeScore}>
              {credibilityScore.toFixed(2)} / 100
            </p>
          </div>

          <div style={styles.resultBox}>
            <h3>Details:</h3>
            <p>{message}</p>
          </div>
        </>
      ) : (
        <p>No results to display. Please verify a news link first.</p>
      )}

      <button style={styles.backButton} onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  resultBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px 0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  positiveScore: {
    color: 'green',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  negativeScore: {
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Results;
