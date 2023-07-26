import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreList = () => {
  const scoresData = [
    {
      iconSrc: "../assets/images/icon-reaction.svg",
      label: "Reaction",
      score: 80
    },
    {
      iconSrc: "../assets/images/icon-memory.svg",
      label: "Memory",
      score: 92
    },
    {
      iconSrc: "../assets/images/icon-verbal.svg",
      label: "Verbal",
      score: 61
    },
    {
      iconSrc: "../assets/images/icon-visual.svg",
      label: "Visual",
      score: 72
    }
  ];

  return (
    <div className="scores">
      {scoresData.map((score, index) => (
        <ScoreRow
          key={index}
          iconSrc={score.iconSrc}
          label={score.label}
          score={score.score}
        />
      ))}
    </div>
  );
};

export default ScoreList;
