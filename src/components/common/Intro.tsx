import styled from '@emotion/styled';
import { body1Regular, titleBold } from '@src/styles';
import React from 'react';

interface IntroProps {
  children: string;
}
function Intro({ children }: IntroProps) {
  return <StyledRoot>{children}</StyledRoot>;
}

export default Intro;
Intro.Title = function IntroTitle({ children }: IntroProps) {
  return <StTitle>{children}</StTitle>;
};
Intro.Description = function IntroDescription({ children }: IntroProps) {
  return <StDescription>{children}</StDescription>;
};

const StyledRoot = styled.section`
  width: 100%;
`;

const StTitle = styled.h1`
  ${titleBold}
  color: #ffffff;
`;
const StDescription = styled.p`
  ${body1Regular}
  margin-top: 17px;
  color: #ffffff;
  opacity: 0.5;
`;
