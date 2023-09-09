// Core
import styled from 'styled-components';

export const ShoppingCardComponent = styled.div`
  width: 450px;
  padding: 48px;
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 12px;   
`;
