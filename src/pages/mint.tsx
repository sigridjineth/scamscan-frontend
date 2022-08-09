import styled from '@emotion/styled';
import Intro from '@src/components/common/Intro';
import { INTRO_INFO } from '@src/constants';
import React from 'react';

function mint() {
  return (
    <StyledRoot>
      <Intro.Title>{INTRO_INFO.MINT.TITLE}</Intro.Title>
      <Intro.Description>{INTRO_INFO.MINT.DESCRIPTION}</Intro.Description>
    </StyledRoot>
  );
}

export default mint;

const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background-image: url('MintingBackground.png');
`;
