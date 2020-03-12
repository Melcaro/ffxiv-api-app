import React from 'react';

export const FCRanking = ({ rank, ranking }) => {
  return (
    <div>
      <h2>RANKING</h2>
      {ranking && (
        <div>
          <p>Rank: {rank}</p>
          <p>Monthly:{ranking.Monthly}</p>
          <p>Weekly:{ranking.Weekly}</p>
        </div>
      )}
    </div>
  );
};
