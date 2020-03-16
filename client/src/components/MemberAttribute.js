import React from 'react';

export const MemberAttribute = ({
  classJobs = [],
  minions = [],
  mounts = [],
}) => {
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

      <div>
        <h2>Minions</h2>
        <div>
          {minions &&
            minions.map(({ Icon, Name }) => (
              <div key={Name}>
                <div>
                  <img src={Icon} alt="minion avatar" />
                </div>
                <p>{Name}</p>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h2>Mounts</h2>
        <div>
          {mounts &&
            mounts.map(({ Icon, Name }) => (
              <div key={Name}>
                <div>
                  <img src={Icon} alt="mounts avatar" />
                </div>
                <p>{Name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
