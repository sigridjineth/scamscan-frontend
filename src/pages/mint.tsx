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
import { mintSBT } from '@src/utils/mintSBT';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Status = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';

function mint() {
  const [isToast, setIsToast] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [totalMatic, setTotalMatic] = useState(0);
  const [status, setStatus] = useState<Status>('IDLE');

  const router = useRouter();
  const handleClick = async () => {
    try {
      console.log('>>데이터 보내는 로직');
      setStatus('LOADING');
      setIsSubmit(true);
      if (typeof window !== undefined) {
        const from = localStorage.getItem('targetAddress');
        const to = localStorage.getItem('ownerAddress');
        const score = Number(localStorage.getItem('point'));
        const transactionId = localStorage.getItem('transactionId');
        const reason = localStorage.getItem('ownerAddress');
        const matic = Number(localStorage.getItem('matic'));

        console.log('>>최종값', from, to, score, transactionId, reason, matic);
        const result = await mintSBT({
          from,
          to,
          score,
          transactionId,
          reason,
          matic,
        });

        console.log('>>vresult', result);
        setStatus('SUCCESS');
      }
    } catch (e) {
      console.log(e);
      setStatus('ERROR');
    }
  };

  const handleClose = () => {
    // setIsSubmit(false);
  };

  const handleCheckClick = () => {
    router.push('/check');
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  useEffect(() => {
    typeof window !== undefined && setTotalMatic(Number(localStorage.getItem('matic')));
  }, [totalMatic]);

  return (
    <StyledRoot>
      <Navbar />
      {isToast && <Toast _onClick={() => setIsToast(false)} />}
      <Intro.Title>{INTRO_INFO.MINT.TITLE}</Intro.Title>
      <Intro.Description>{INTRO_INFO.MINT.DESCRIPTION}</Intro.Description>
      <MintForm setIsToast={setIsToast} setIsSubmit={setIsSubmit} />
      {isSubmit && (
        <StModalWrapper className="fixed z-10" onClick={handleClose}>
          {status === 'IDLE' && (
            <ConfirmModal>
              <ConfirmModal.Title>Are You Sure?</ConfirmModal.Title>
              <ConfirmModal.Description>
                You need to burn your matics below
              </ConfirmModal.Description>
              <ConfirmModal.Matic>{totalMatic} Matic</ConfirmModal.Matic>
              <ConfirmModal.Button onClick={handleClick}>Yes, Send Reputation</ConfirmModal.Button>
            </ConfirmModal>
          )}
          {status === 'LOADING' && (
            <ConfirmModal>
              <svg
                aria-hidden="true"
                className="mr-2 w-10 h-10 text-white animate-spin dark:text-gray-600 fill-green-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </ConfirmModal>
          )}
          {status === 'SUCCESS' && (
            <ConfirmModal>
              <ConfirmModal.Title>🎉 Mint Success</ConfirmModal.Title>
              <ConfirmModal.Description>
                You just minted the reputation SBT.
              </ConfirmModal.Description>
              <ConfirmModal.Button onClick={handleCheckClick}>Go to check</ConfirmModal.Button>
            </ConfirmModal>
          )}
          {status === 'ERROR' && (
            <ConfirmModal>
              <ConfirmModal.Title>🥲 Mint Failed</ConfirmModal.Title>
              <ConfirmModal.Description>
                You didn&apos;t have enough token.
              </ConfirmModal.Description>
              <ConfirmModal.Button onClick={handleHomeClick}>Go to Home</ConfirmModal.Button>
            </ConfirmModal>
          )}
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
