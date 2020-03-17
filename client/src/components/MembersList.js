import React from 'react';
import { Link } from 'react-router-dom';

import {
  MembersListContainer,
  MembersTitle,
  ProfilesContainer,
  ProfileContainer,
  ProfilePicContainer,
  ProfilePic,
  ProfileInfos,
  ProfileName,
  ProfileStatus,
  RankIconContainer,
  Icon,
  StyledRank,
} from '../styles/MembersListStyle';

export const MembersList = ({ freeCompanyMembers = [] }) => {
  return (
    <MembersListContainer>
      <MembersTitle>MEMBERS</MembersTitle>
      <ProfilesContainer>
        {freeCompanyMembers.map(({ Avatar, ID, Name, Rank, RankIcon }) => (
          <ProfileContainer to={`/${ID}`} key={ID}>
            <ProfilePicContainer>
              <ProfilePic src={Avatar} alt="character avatar" />
            </ProfilePicContainer>
            <ProfileInfos>
              <ProfileName>{Name}</ProfileName>
              <ProfileStatus>
                <RankIconContainer>
                  <Icon src={RankIcon} alt="rankIcon" />
                </RankIconContainer>
                <StyledRank>{Rank}</StyledRank>
              </ProfileStatus>
            </ProfileInfos>
          </ProfileContainer>
        ))}
      </ProfilesContainer>
    </MembersListContainer>
  );
};
