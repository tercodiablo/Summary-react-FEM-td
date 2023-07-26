import React from 'react';

const ResultSection = () => {
  return (
    <div>
      <h4>Your Result</h4>
      <div className="circle">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h2>Great</h2>
      <p className="info">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default ResultSection;
