/* eslint-disable react-hooks/rules-of-hooks */
import styled from '@emotion/styled';
import ConfirmModal from '@src/components/common/ConfirmModal';
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
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [totalMatic, setTotalMatic] = useState(0);

  const handleClick = async () => {
    console.log('>>데이터 보내는 로직');
  };

  const handleClose = () => {
    setIsSubmit(false);
  };

  return (
    <StyledRoot>
      <Navbar />
      {isToast && <Toast _onClick={() => setIsToast(false)} />}
      <Intro.Title>{INTRO_INFO.MINT.TITLE}</Intro.Title>
      <Intro.Description>{INTRO_INFO.MINT.DESCRIPTION}</Intro.Description>
      <MintForm setIsToast={setIsToast} setIsSubmit={setIsSubmit} />
      {isSubmit && (
        <StModalWrapper className="fixed z-10" onClick={handleClose}>
          <ConfirmModal>
            <ConfirmModal.Title>Are You Sure?</ConfirmModal.Title>
            <ConfirmModal.Description>You need to burn your matics below</ConfirmModal.Description>
            <ConfirmModal.Matic>{totalMatic} Matic</ConfirmModal.Matic>
            <ConfirmModal.Button onClick={handleClick}>Yes, Send Reputation</ConfirmModal.Button>
          </ConfirmModal>
        </StModalWrapper>
      )}
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

const StModalWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;
