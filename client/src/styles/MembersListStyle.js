import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MembersListContainer = styled.div`
  flex: 0 0 40%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`;

export const MembersTitle = styled.div`
  border: 1px solid black;
  font-size: 1.5em;
  font-weight: bold;
  flex: 0 0 10%;
`;
export const ProfilesContainer = styled.div`
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
`;

export const ProfileContainer = styled(Link)`
  border: 1px solid red;
  text-decoration: none;
  flex: 0 0 100%;
  display: flex;
  color: black;
`;

export const ProfilePicContainer = styled.div`
  flex: 0 0 10%;
  border: 1px solid black;
`;

export const ProfilePic = styled.img`
  width: 100%;
`;

export const ProfileInfos = styled.div`
  flex: 0 0 80%;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const ProfileName = styled.h3`
  border: 1px solid pink;
  text-align: left;
`;

export const ProfileStatus = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: flex-start;
`;

export const RankIconContainer = styled.div`
  flex: 0 0 5%;
  border: 1px solid blue;
`;

export const Icon = styled.img`
  width: 100%;
`;

export const StyledRank = styled.span`
  flex: 0 0 80%;
  text-align: left;
`;
