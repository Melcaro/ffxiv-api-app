import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MembersListContainer = styled.div`
  flex: 0 0 100%;
  border: 1px solid #3c3c3c;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  background-color: #1c1c1c;
`;

export const MembersTitle = styled.h2`
  color: #bfa34b;
  border-bottom: 1px solid #3c3c3c;
  flex: 0 0 10%;
  margin: 0;
`;
export const ProfilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1% 1%;
`;

export const ProfileContainer = styled(Link)`
  text-decoration: none;
  flex: 0 0 20%;
  display: flex;
  color: #ccc;
  padding-bottom: 1%;
`;

export const ProfilePicContainer = styled.div`
  flex: 0 0 15%;
`;

export const ProfilePic = styled.img`
  width: 100%;
  border-radius: 5%;
`;

export const ProfileInfos = styled.div`
  flex: 0 0 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1%;
`;
export const ProfileName = styled.h3`
  flex: 0 0 5%;
  text-align: left;
  margin: 0;
`;

export const ProfileStatus = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const RankIconContainer = styled.div`
  flex: 0 0 10%;
`;

export const Icon = styled.img`
  width: 100%;
`;

export const StyledRank = styled.span`
  flex: 0 0 80%;
  text-align: left;
`;
