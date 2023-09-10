// Core
import styled from 'styled-components';

// Components
import { Paragraph } from '../components/Paragraph';
import { Title } from '../components/Title';

interface OptionsComponentProps {
  active: boolean;
}

export const OptionsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const OptionsComponent = styled.div<OptionsComponentProps>`
  cursor: pointer;
  padding: 8px;
  background-color: ${({ active }) => (active ? '#002F52' : '#FFFFFF')};
  border: 1px solid ${({ active }) => (active ? '#002F52' : '#EB9B00')};
  border-radius: 24px;
  width: 200px;
  transition: ease-in-out 150ms;
  font-family: sans-serif;
  
  &:hover {
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.25);
  };
`;

export const Type = styled(Paragraph)<OptionsComponentProps>`
  color: ${({ active }) => (active ? '#FFFFFF' : '#EB9B00')};
`;

export const Price = styled(Title)<OptionsComponentProps>`
  color: ${({ active }) => (active ? '#FFFFFF' : '#EB9B00')};
`;

export const Description = styled(Paragraph)<OptionsComponentProps>`
  color: ${({ active }) => (active ? '#FFFFFF' : 'rgba(0, 0, 0, 0.54)')};
`;
