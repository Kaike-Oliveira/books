// Core
import React, { CSSProperties, ReactNode } from 'react';

// Style
import { ParagraphComponent } from '../styles/Paragraph.styles';

// Types
export interface ParagraphProps {
  testId?: string;
  style?: CSSProperties;
  className?: string;
  weight?: 'normal' | 'bold';
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
  color?: string;
  children?: ReactNode | ReactNode[];
}
export function Paragraph({
  testId,
  style,
  className,
  weight = 'normal',
  size = 'md',
  color,
  align = 'left',
  children,
}: ParagraphProps) {
  return (
    <ParagraphComponent
      data-testid={testId}
      style={style}
      className={className}
      weight={weight}
      size={size}
      align={align}
      color={color}
    >
      {children}
    </ParagraphComponent>
  );
}
