import styled from '@emotion/styled';
import { flexColumn } from '@src/styles';
import React from 'react';

function TxCheckInputGroup() {
  return <StRoot>TxCheckInputGroup</StRoot>;
}

export default TxCheckInputGroup;

const StRoot = styled.section`
  ${flexColumn}
  width: 560px;
  height: 398px;
  background: #202020;
  border-radius: 20px;
  margin-top: 20px;
`;
