import React from 'react';

import { useFreeCompanyInfos } from '../services/companyHook';

import { FCIdentity } from './FCIdentity';
import { MembersList } from './MembersList';
import { FCRanking } from './FCRanking';
import { FCReputation } from './FCReputation';
import { FCFocus } from './FCFocus';
import { FCSeeking } from './FCSeeking';

import loading from '../styles/loading.gif';

import {
  StyledLoader,
  LoaderTitle,
  HomePageContainer,
  FCInfosContainer,
  ImgContainer,
  LoaderImg,
} from '../styles/FreeCompanyPageStyle';

export const FreeCompanyPage = (props) => {
  const { freeCompanyId } = props.match.params;
  const { freeCompInfos, error, isLoading } = useFreeCompanyInfos(
    freeCompanyId
  );

  const {
    freecompany: {
      estate,
      active,
      activemembers: activeMembers,
      server,
      dc,
      formed,
      grandcompany: grandCompany,
      name,
      reputation,
      slogan,
      tag,
      rank,
      ranking: fCRanking,
      seeking,
      crest,
      focus,
    },
    freecompanymembers,
  } = freeCompInfos;

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
      <HomePageContainer>
        <FCIdentity
          active={active}
          activeMembers={activeMembers}
          crest={crest}
          server={server}
          dc={dc}
          formed={formed}
          grandCompany={grandCompany}
          name={name}
          slogan={slogan}
          tag={tag}
          estate={estate}
        />
        <FCInfosContainer>
          <FCReputation reputation={reputation} />
          <FCFocus focus={focus} />
          <FCRanking rank={rank} ranking={fCRanking} />
          <FCSeeking seeking={seeking} />
        </FCInfosContainer>
        <MembersList freeCompanyMembers={freecompanymembers} />
      </HomePageContainer>
    )
  );
};
