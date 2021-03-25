import React from 'react';

import { useMemberInfos } from '../../services/memberHook';

import { MemberIdentity } from './MemberIdentity';
import { MemberGearSet } from './MemberGearSet';
import { MemberAttribute } from './MemberAttribute';

import {
  StyledLoader,
  LoaderTitle,
  ImgContainer,
  LoaderImg,
} from '../../styles/FreeCompanyPageStyle';

import {
  MemberPageContainer,
  MemberDetailsContainer,
} from '../../styles/MemberPageStyle';

import loading from '../styles/loading.gif';

export const MemberPage = (props) => {
  const { memberID } = props.match.params;
  const { memberInfos, error, isLoading } = useMemberInfos(memberID);

  const {
    characterInfos: { classJobs, portrait, gearSet, ...rest },
    freeCompanyName,
  } = memberInfos;

  const loader = isLoading && (
    <StyledLoader>
      <LoaderTitle>LOADING...</LoaderTitle>
      <ImgContainer>
        <LoaderImg src={loading} alt="loader img" />
      </ImgContainer>
    </StyledLoader>
  );

  return (
    loader || (
      <MemberPageContainer>
        <MemberDetailsContainer>
          <MemberIdentity {...rest} freeCompany={freeCompanyName} />
          <MemberAttribute classJobs={classJobs} />
        </MemberDetailsContainer>
        <MemberGearSet gearSet={gearSet} portrait={portrait} />
      </MemberPageContainer>
    )
  );
};
