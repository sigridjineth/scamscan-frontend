import styled from '@emotion/styled';
import React from 'react';

function mint() {
  return <StyledRoot>mint</StyledRoot>;
}

export default mint;

const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background-image: url('MintingBackground.png');
`;
