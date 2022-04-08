import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

export const ButtonListItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;
