// Core
import styled from 'styled-components';

interface ButtonComponentProps {
  type: 'primary' | 'secondary';
  size: 'sm' | 'md';
}

const mapBackgroundColorByType = {
  primary: '#EB9B00',
  secondary: '#FFFFFF',
};

const mapBorderColorByType = {
  primary: '#EB9B00',
  secondary: '#EB9B00',
};

const mapTextColorByType = {
  primary: '#FFFFFF',
  secondary: '#EB9B00',
};

const mapBackgroundColorHoverByType = {
  primary: '#B87900',
  secondary: '#FFFFFF',
};

const mapBorderColorHoverByType = {
  primary: '#B87900',
  secondary: '#B87900',
};

const mapTextColorHoverByType = {
  primary: '#FFFFFF',
  secondary: '#B87900',
};

const mapPaddingBySize = {
  sm: '8px 16px',
  md: '16px 24px',
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  cursor: pointer;
  padding: ${({ size }) => mapPaddingBySize[size]};
  font-size: 20px;
  font-weight: 700;
  color: ${({ type }) => mapTextColorByType[type]};
  background-color: ${({ type }) => mapBackgroundColorByType[type]};
  border: 2px solid ${({ type }) => mapBorderColorByType[type]};
  transition: ease-in-out 150ms;
  
  &:hover {
    color: ${({ type }) => mapTextColorHoverByType[type]};
    background-color: ${({ type }) => mapBackgroundColorHoverByType[type]};
    border: 2px solid ${({ type }) => mapBorderColorHoverByType[type]};
  };
`;
