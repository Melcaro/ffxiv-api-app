import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MembersListContainer = styled.div`
  flex: 0 0 20%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const MembersTitle = styled.div`
  border-bottom: 1px solid black;
  font-size: 1.5em;
  font-weight: bold;
  flex: 0 0 10%;
`;
export const ProfilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProfileContainer = styled(Link)`
  border-bottom: 1px solid black;
  text-decoration: none;
  flex: 0 0 100%;
  display: flex;
  color: black;
`;

export const ProfilePicContainer = styled.div`
  flex: 0 0 30%;
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
  margin-left: 2%;
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
