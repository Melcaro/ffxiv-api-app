import React from 'react';
import { Link } from 'react-router-dom';

export const MembersList = ({ freeCompanyMembers = [] }) => {
  return (
    <div>
      <h2>MEMBERS</h2>
      <div>
        {freeCompanyMembers.map(({ Avatar, ID, Name, Rank, RankIcon }) => (
          <Link to={`/${ID}`} key={ID}>
            <div>
              <img src={Avatar} alt="character avatar" />
            </div>
            <div>
              <h3>{Name}</h3>
              <div>
                <div>
                  <img src={RankIcon} alt="rankIcon" />
                </div>
                <span>{Rank}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
