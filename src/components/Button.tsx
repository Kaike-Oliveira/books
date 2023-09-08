// Core
import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';

// Style
import { ButtonComponent } from '../styles/Button.styles';

// Types
export interface ButtonProps {
  testId?: string;
  style?: CSSProperties;
  className?: string;
  type?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | ReactNode[];
}
export function Button({
  testId,
  style,
  className,
  type = 'primary',
  size = 'md',
  onClick,
  children,
}: ButtonProps) {
  return (
    <ButtonComponent
      data-testid={testId}
      style={style}
      className={className}
      type={type}
      size={size}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
}
