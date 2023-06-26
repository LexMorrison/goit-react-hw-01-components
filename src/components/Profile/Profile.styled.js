import styled from '@emotion/styled';

export const ProfileStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid;
  border-radius: 25px;
  width: 300px;
  height: 100%;
  margin-bottom: 30px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const ProfileImg = styled.img`
  width: 250px;
  border-radius: 50%;
  border: 3px solid black;
  box-shadow: 0 0 7px #666;
`;

export const ProfileInfo = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;
