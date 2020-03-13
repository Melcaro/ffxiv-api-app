import React from 'react';

export const FCSeeking = ({ seeking }) => {
  return (
    <div>
      <h2>SEEKING</h2>
      {seeking &&
        seeking.map(
          ({ Icon, Name, Status }) =>
            Status && (
              <div>
                <div>
                  <img src={Icon} alt="activity icon" />
                </div>
                <span>{Name}</span>
              </div>
            )
        )}
    </div>
  );
};
