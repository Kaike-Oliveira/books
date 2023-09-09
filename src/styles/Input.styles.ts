// Core
import styled from 'styled-components';

interface InputComponentProps {
  type: 'text' | 'password';
  block: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  border: 1px solid #002F52;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 0 12px;
  font-family: sans-serif;
`;

export const PrefixContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const SuffixContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 12px;   
`;

export const InputComponent = styled.input<InputComponentProps>`
  cursor: pointer;
  height: 36px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: sans-serif;
`;
