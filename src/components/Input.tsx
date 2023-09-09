// Core
import React, {
  ChangeEventHandler,
  CSSProperties, ReactNode, useState,
} from 'react';

// Style
import {
  InputComponent,
  InputContainer,
  PrefixContainer,
  SuffixContainer,
} from '../styles/Input.styles';

// Icons
import ShowPassword from '../icons/ShowPassword';
import HidePassword from '../icons/HidePassword';

// Types
export interface InputProps {
  testId?: string;
  style?: CSSProperties;
  className?: string;
  type?: 'text' | 'password';
  prefix?: ReactNode;
  suffix?: ReactNode;
  block?: boolean;
  placeholder: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
  value,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    type === 'password' ? (
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
          type={showPassword ? 'text' : 'password'}
          onChange={onChange}
          placeholder={placeholder}
          block={block}
          value={value}
        />
        {showPassword ? (
          <SuffixContainer style={{ cursor: 'pointer' }} onClick={handleShow}>
            <HidePassword />
          </SuffixContainer>
        ) : (
          <SuffixContainer style={{ cursor: 'pointer' }} onClick={handleShow}>
            <ShowPassword />
          </SuffixContainer>
        )}
      </InputContainer>
    ) : (
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
          value={value}
        />
        {suffix && (
          <SuffixContainer>
            {suffix}
          </SuffixContainer>
        )}
      </InputContainer>
    ));
}
