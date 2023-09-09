// Core
import React, { CSSProperties, ReactNode } from 'react';

// Style
import { TitleComponent } from '../styles/Title.styles';

// Types
export interface TitleProps {
  testId?: string;
  style?: CSSProperties;
  className?: string;
  weight?: 'normal' | 'bold';
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
  color?: string;
  upper?: boolean;
  children?: ReactNode | ReactNode[];
}
export function Title({
  testId,
  style,
  className,
  weight = 'normal',
  size = 'md',
  color,
  upper = false,
  align = 'left',
  children,
}: TitleProps) {
  return (
    <TitleComponent
      data-testid={testId}
      style={style}
      className={className}
      weight={weight}
      size={size}
      align={align}
      color={color}
      upper={upper}
    >
      {children}
    </TitleComponent>
  );
}
