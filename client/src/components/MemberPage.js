import React from 'react';

import { useMemberInfos } from '../services/memberHook';

export const MemberPage = props => {
  const { memberID } = props.match.params;
  const { memberInfos, error, isLoading } = useMemberInfos(memberID);

  const loader = isLoading && (
    <div>
      <h2>LOADING...</h2>
      <iframe
        src="https://giphy.com/embed/gpl1p4PeUVpg4"
        width="480"
        height="427"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );

  console.log(memberInfos);
  return loader || <div></div>;
};
