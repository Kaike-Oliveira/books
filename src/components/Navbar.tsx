// Core
import React, { CSSProperties } from 'react';

// Style
import {
  Action,
  ActionsContainer,
  List, LogoContainer, NavbarComponent, OptionsList,
} from '../styles/Navbar.styles';

// Icons
import Logo from '../icons/Logo';
import LogoText from '../icons/LogoText';
import { Paragraph } from './Paragraph';
import Bag from '../icons/Bag';
import User from '../icons/User';

// Types
export interface NavbarProps {
  testId?: string;
  style?: CSSProperties;
  className?: string;
  list?: string[];
}
export function Navbar({
  testId,
  style,
  className,
  list,
}: NavbarProps) {
  return (
    <NavbarComponent
      data-testid={testId}
      style={style}
      className={className}
    >
      <div style={{ display: 'flex' }}>
        <LogoContainer>
          <Logo />
          <LogoText />
        </LogoContainer>
        <OptionsList>
          {list?.map((item) => (
            <List key={item}>
              <Paragraph weight="bold">{item}</Paragraph>
            </List>
          ))}
        </OptionsList>
      </div>
      <ActionsContainer>
        <Action>
          <Bag />
          <Paragraph weight="bold">My bag</Paragraph>
        </Action>
        <Action>
          <User />
          <Paragraph weight="bold">My profile</Paragraph>
        </Action>
      </ActionsContainer>
    </NavbarComponent>
  );
}
