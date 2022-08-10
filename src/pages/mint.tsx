import styled from '@emotion/styled';
import Intro from '@src/components/common/Intro';
import MintForm from '@src/components/MintForm';
import { INTRO_INFO } from '@src/constants';
import { flexColumn } from '@src/styles';
import React from 'react';

function mint() {
  return (
    <StyledRoot>
      <Intro.Title>{INTRO_INFO.MINT.TITLE}</Intro.Title>
      <Intro.Description>{INTRO_INFO.MINT.DESCRIPTION}</Intro.Description>
      <MintForm />
    </StyledRoot>
  );
}

export default mint;

const StyledRoot = styled.section`
  width: 100%;
  height: 1919px;
  background-size: 1919px;
  ${flexColumn}
  background-image: url('MintingBackground.png');
  & h1 {
    margin-top: 209px;
  }
  & form {
    margin-top: 80px;
    ${flexColumn}
    & > button {
      margin-top: 80px;
    }
  }
`;
