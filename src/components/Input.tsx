// Core
import React, { CSSProperties, ReactNode } from 'react';

// Style
import {
  InputComponent,
  InputContainer,
  PrefixContainer,
  SuffixContainer,
} from '../styles/Input.styles';

// Types
export interface InputProps {
  testId?: string;
  style?: CSSProperties;
  className?: string;
  type?: 'text' | 'number' | 'password';
  prefix?: ReactNode;
  suffix?: ReactNode;
  block?: boolean;
  placeholder: string;
  onChange?: () => void;
}
export function Input({
  testId,
  style,
  className,
  type = 'text',
  prefix,
  suffix,
  block = true,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <InputContainer>
      {prefix && (
        <PrefixContainer>
          {prefix}
        </PrefixContainer>
      )}
      <InputComponent
        data-testid={testId}
        style={style}
        className={className}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        block={block}
      />
      {suffix && (
        <SuffixContainer>
          {suffix}
        </SuffixContainer>
      )}
    </InputContainer>
  );
}
