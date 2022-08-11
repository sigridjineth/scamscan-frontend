/* eslint-disable react-hooks/rules-of-hooks */
import styled from '@emotion/styled';
import Intro from '@src/components/common/Intro';
import Modal from '@src/components/common/Modal';
import Navbar from '@src/components/common/Navbar';
import Toast from '@src/components/common/Toast';
import MintForm from '@src/components/MintForm';
import { INTRO_INFO } from '@src/constants';
import { flexColumn } from '@src/styles';
import React, { useEffect, useState } from 'react';

function mint() {
  const [isToast, setIsToast] = useState<boolean>(false);

  return (
    <StyledRoot>
      <Navbar />
      {isToast && <Toast _onClick={() => setIsToast(false)} />}
      <Intro.Title>{INTRO_INFO.MINT.TITLE}</Intro.Title>
      <Intro.Description>{INTRO_INFO.MINT.DESCRIPTION}</Intro.Description>
      <MintForm setIsToast={setIsToast} />
      <Modal
        modalId="connectWallet"
        // _onClick={handleModalClick}
        btnText="Connect Wallet"
        modalTitle="Connect Wallet"
        modalContent="Please connect your wallet to continue"
        modalBtn="MetaMask"
        className="Modal__style"
      />
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
