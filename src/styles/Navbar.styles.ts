// Core
import styled from 'styled-components';

export const NavbarComponent = styled.div`
  height: 40px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 18px;
  border: 1px solid red;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const List = styled.li`
  list-style: none;
  padding: 10px;
  transition: ease-in-out 250ms;
  cursor: pointer;
  &:hover {
    background-color: #002F52;
    > p {
      color: #FFFFFF;
    };
  };
`;

export const ActionsContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Action = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  > svg {
    height: 32px;
    width: 32px;
  };
`;
