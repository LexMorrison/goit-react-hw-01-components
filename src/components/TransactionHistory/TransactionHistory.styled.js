import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border: 5px solid #fff;
  border-top: 5px solid #fff;
  border-bottom: 3px solid #fff;
  border-collapse: collapse;
  outline: 3px solid #ffd300;
  font-size: 15px;
  background: #fff;

  & tbody tr:nth-of-type(even) {
    background: #f8f8f8;
  }
`;

export const TableHead = styled.th`
  font-weight: bold;
  padding: 7px;
  background: #00bfff;
  border: none;
  text-align: left;
  font-size: 15px;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #ffd300;
`;
