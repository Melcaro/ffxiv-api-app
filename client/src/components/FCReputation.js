import React from 'react';

export const FCReputation = ({ reputation }) => {
  return (
    <div>
      <h2>REPUTATION</h2>
      <div>
        {reputation &&
          reputation.map(({ Name, Progress, Rank }) => (
            <div>
              <p>{Name}</p>
              <div>{Progress}</div>
              <p>Rank:{Rank}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
