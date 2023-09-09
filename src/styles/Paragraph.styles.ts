// Core
import styled from 'styled-components';

interface ParagraphComponentProps {
  size: 'sm' | 'md' | 'lg';
  weight: 'normal' | 'bold';
  align?: 'left' | 'center' | 'right';
  color: string | undefined;
}

const mapSize = {
  sm: '14px',
  md: '16px',
  lg: '18px',
};

export const ParagraphComponent = styled.p<ParagraphComponentProps>`
  font-size: ${({ size }) => mapSize[size]};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => (color || '#002F52')};
  text-align: ${({ align }) => align};
  font-family: sans-serif;
`;
