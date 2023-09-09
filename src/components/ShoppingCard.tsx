// Core
import React, { CSSProperties, useState } from 'react';

// Style
import {
  CardActions,
  IconContainer,
  IconsContainer,
  ShoppingCardComponent,
} from '../styles/ShoppingCard.styles';

// Components
import { Title } from './Title';
import { Paragraph } from './Paragraph';
import { Button } from './Button';

// Icons
import HeartFilled from '../icons/HeartFilled';
import HeartOutlined from '../icons/HeartOutlined';
import CartFilled from '../icons/CartFilled';
import CartOutlined from '../icons/CartOutlined';

// Types
export interface ShoppingCardProps {
  testId?: string;
  style?: CSSProperties;
  className?: string;
  title?: string;
  product?: string;
  description?: string;
  author?: string;
  price?: number;
}
export function ShoppingCard({
  testId,
  style,
  className,
  title,
  product,
  description,
  author,
  price,
}: ShoppingCardProps) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const [buy, setBuy] = useState(false);
  const handleBuy = () => {
    setBuy(!buy);
  };
  return (
    <ShoppingCardComponent
      data-testid={testId}
      style={style}
      className={className}
    >
      <div>
        <Title color="#EB9B00" weight="bold" upper>{title}</Title>
        <Paragraph weight="bold">{product}</Paragraph>
        <Paragraph size="sm">{description}</Paragraph>
        <Paragraph size="sm">{author}</Paragraph>
        <Title>{price}</Title>
      </div>
      <CardActions>
        <IconsContainer>
          {favorite ? (
            <IconContainer style={{ cursor: 'pointer' }} onClick={handleFavorite}>
              <HeartFilled />
            </IconContainer>
          ) : (
            <IconContainer style={{ cursor: 'pointer' }} onClick={handleFavorite}>
              <HeartOutlined />
            </IconContainer>
          )}
          {buy ? (
            <IconContainer style={{ cursor: 'pointer' }} onClick={handleBuy}>
              <CartFilled />
            </IconContainer>
          ) : (
            <IconContainer style={{ cursor: 'pointer' }} onClick={handleBuy}>
              <CartOutlined />
            </IconContainer>
          )}
        </IconsContainer>
        <Button>Buy Now</Button>
      </CardActions>
    </ShoppingCardComponent>
  );
}
