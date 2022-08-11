import styled from '@emotion/styled';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import Button from '../common/Button';
import Modal from '../common/Modal';
import PointSendInputGroup from './InputGroup/PointSendInputGroup';
import TxCheckInputGroup from './InputGroup/TxCheckInputGroup';
import LodingInputGroup from './LodingInputGroup';

interface MintFormProps {
  setIsToast: Dispatch<SetStateAction<boolean>>;
}

function MintForm({ setIsToast }: MintFormProps) {
  const methods = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [averageScore, setAverageScore] = useState<number>(0);
  // const { getValues } = useFormContext();
  const onSubmit = (data) => {
    const value = methods.getValues();
    const allDataArray = Object.values(value);

    console.log('>>value', value);
    console.log('>>data', data);
    allDataArray?.map((item) => {
      if (!item || item === '') {
        setTimeout(() => {
          setIsToast(true);
        }, 100);
      }
    });
    setTimeout(() => {
      setIsToast(false);
    }, 4000);
  };

  useEffect(() => {
    console.log('>>isPadding>>', isLoading);
  }, [isLoading]);

  const handleModalClick = () => {
    console.log('클릭');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TxCheckInputGroup
          setIsLoading={setIsLoading}
          setAverageScore={setAverageScore}
          setIsSuccess={setIsSuccess}
        />
        {isLoading ? (
          <LodingInputGroup />
        ) : (
          <PointSendInputGroup
            averageScore={averageScore}
            isSuccess={isSuccess}
            setAverageScore={setAverageScore}
          />
        )}
        {/* <StModalWrapper>
          <Modal
            modalId="connectWallet"
            _onClick={handleModalClick}
            btnText="Connect Wallet"
            modalTitle="Connect Wallet"
            modalContent="Please connect your wallet to continue"
            modalBtn="MetaMask"
            className="Modal__style"
          />
        </StModalWrapper> */}
        <Button type="submit">Send Reputation</Button>
      </form>
    </FormProvider>
  );
}

export default MintForm;
// const StModalWrapper = styled.section`
//   /* position: absolute; */
//   background: rgba(0, 0, 0, 0.8);
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   .Modal__style {
//     /* position: fixed; */
//   }
// `;
