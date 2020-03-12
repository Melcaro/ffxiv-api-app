import React from 'react';

export const FCFocus = ({ focus }) => {
  return (
    <div>
      <h2>FOCUS</h2>
      {focus &&
        focus.map(
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
