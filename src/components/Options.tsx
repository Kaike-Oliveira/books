// Core
import React, { CSSProperties, useState } from 'react';

// Style
import {
  Description,
  OptionsComponent,
  OptionsContainer,
  Price,
  Type,
} from '../styles/Options.styles';

// Types
interface OptionsProps {
  id: number;
  type: string;
  price: string;
  description: string;
}

export interface OptionsGroupProps {
  testId?: string;
  style?: CSSProperties;
  className?: string;
  options: OptionsProps[];
  onChange?: (option: OptionsProps) => void;
}

export function Options({
  testId,
  style,
  className,
  options,
  onChange,
}: OptionsGroupProps) {
  const [selection, setSelection] = useState<OptionsProps | null>(null);
  const handleSelect = (option: OptionsProps): void => {
    setSelection(option);
    if (onChange) {
      onChange(option);
    }
  };
  return (
    <OptionsContainer>
      {options.map((option) => (
        <OptionsComponent
          data-testid={testId}
          style={style}
          className={className}
          active={selection?.id === option.id}
          onClick={() => handleSelect(option)}
          key={option.id}
        >
          <Type active={selection?.id === option.id} align="center">{option.type}</Type>
          <Price active={selection?.id === option.id} weight="bold" align="center">
            R$
            {option.price}
          </Price>
          <Description active={selection?.id === option.id} align="center">{option.description}</Description>
        </OptionsComponent>
      ))}
    </OptionsContainer>
  );
}
