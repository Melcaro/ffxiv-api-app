import React from 'react';

export const MemberAttribute = ({ classJobs = [] }) => {
  return (
    <div>
      <div>
        <h2>Class & Jobs</h2>
        <div>
          {classJobs &&
            classJobs.map(({ ClassID, JobID, Level, Name }) => (
              <div key={ClassID}>
                <span>lvl{Level}</span>
                <span>{Name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
