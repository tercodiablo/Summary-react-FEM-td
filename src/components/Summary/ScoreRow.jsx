import React from 'react';

const ScoreRow = ({ iconSrc, label, score }) => {
  return (
    <div className="row">
      <div className="score-con">
        <img src={iconSrc} alt={label} />
        <span>{label}</span>
      </div>
      <span className="dark-text">
        {score}
        <span className="gray"> / 100</span>
      </span>
    </div>
  );
};

export default ScoreRow;