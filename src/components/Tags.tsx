// Core
import React, { CSSProperties } from 'react';
import { Button } from './Button';

// Types
interface Items {
  text: string;
  id: string;
}

export interface TagsProps {
  testId?: string;
  style?: CSSProperties;
  className?: string;
  tags: Items[];
}

export function Tags({
  testId,
  style,
  className,
  tags,
}: TagsProps) {
  return (
    <div
      data-testid={testId}
      style={style}
      className={className}
    >
      {tags && tags.map((tag: Items) => (
        <Button key={tag.id} style={{ margin: 12 }}>
          {tag.text}
        </Button>
      ))}
    </div>
  );
}
