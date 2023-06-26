import styled from '@emotion/styled';

export const StatisticWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
  padding: 10px;
  margin-bottom: 32px;
`;

export const StatisticList = styled.ul`
  display: flex;
  gap: 5px;
`;

export const StatisticItem = styled.li`
  border: 1px solid black;
  border-radius: 25px;
  background-color: ${prop => prop.color};
  color: silver;
  padding: 10px;
`;
