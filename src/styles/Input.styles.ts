// Core
import styled from 'styled-components';

interface InputComponentProps {
  type: 'text' | 'number' | 'password';
  block: boolean;
}

// const mapBackgroundColorByType = {
//   primary: '#EB9B00',
//   secondary: '#FFFFFF',
// };
//
// const mapBorderColorByType = {
//   primary: '#EB9B00',
//   secondary: '#EB9B00',
// };
//
// const mapTextColorByType = {
//   primary: '#FFFFFF',
//   secondary: '#EB9B00',
// };
//
// const mapBackgroundColorHoverByType = {
//   primary: '#B87900',
//   secondary: '#FFFFFF',
// };
//
// const mapBorderColorHoverByType = {
//   primary: '#B87900',
//   secondary: '#B87900',
// };
//
// const mapTextColorHoverByType = {
//   primary: '#FFFFFF',
//   secondary: '#B87900',
// };
//
// const mapPaddingBySize = {
//   sm: '8px 16px',
//   md: '16px 24px',
// };

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  border: 1px solid red;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 0 12px;
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
`;
