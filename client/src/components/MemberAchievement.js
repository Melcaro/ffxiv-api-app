import React from 'react';

export const MemberAchievement = ({ achievement = [] }) => {
  return (
    <div>
      <h2>Achievements</h2>
      {achievement && (
        <div>
          {achievement.map(({ Date: achievementDate, ID }) => {
            const date = Date(achievementDate);
            console.log('date', date);
            return <div key={ID}>{date}</div>;
          })}
        </div>
      )}
    </div>
  );
};
