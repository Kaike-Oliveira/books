// Core
import styled from 'styled-components';

interface TitleComponentProps {
  size: 'sm' | 'md' | 'lg';
  weight: 'normal' | 'bold';
  align: 'left' | 'center' | 'right';
  color: string | undefined;
  upper: boolean;
}

const mapSize = {
  sm: '20px',
  md: '24px',
  lg: '32px',
};

export const TitleComponent = styled.h1<TitleComponentProps>`
  font-size: ${({ size }) => mapSize[size]};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => (color || '#002F52')};
  text-align: ${({ align }) => align};
  text-transform: ${({ upper }) => (upper ? 'uppercase' : 'unset')};
  font-family: sans-serif;
`;
