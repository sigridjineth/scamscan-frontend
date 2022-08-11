import styled from '@emotion/styled';
import useThrottle from '@src/hooks/useThrottle';
import { getBalance } from '@src/utils/getBalance';
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
  setIsSubmit: Dispatch<SetStateAction<boolean>>;
}

function MintForm({ setIsToast, setIsSubmit }: MintFormProps) {
  const methods = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCalculateLoading, setIsCalculateLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [averageScore, setAverageScore] = useState<number>(0);
  const [burnedMatic, setBurnedMatic] = useState<number>(0);

  const getBurnedMatic = async (point: number) => {
    console.log('>>>point', point);
    let currentPoint = Number(point);

    if (!point) {
      currentPoint = 0;
    }
    const result = await getBalance(currentPoint);

    setBurnedMatic(result);
  };
  // const calculateBurnedMatice = useThrottle(getBurnedMatic, 2000);

  // const { getValues } = useFormContext();
  useEffect(() => {
    const subscription = methods.watch((point) => {
      console.log('****', point?.point);
      getBurnedMatic(Number(point?.point));
    });

    return () => subscription.unsubscribe();
  }, [methods, methods.watch]);

  const onSubmit = (data) => {
    const value = methods.getValues();
    const allDataArray = Object.values(value);
    let isEmpty = false;

    console.log('>>value', value);
    console.log('>>data', data);
    allDataArray?.map((item) => {
      if (!item || item === '') {
        setTimeout(() => {
          setIsToast(true);
        }, 100);
        isEmpty = true;
      }
    });
    setTimeout(() => {
      setIsToast(false);
    }, 4000);

    if (!isEmpty && typeof window !== undefined) {
      setIsSubmit(true);
      /* 로컬스토리지에 데이터 저장 */
      localStorage.setItem('point', value.point);
      localStorage.setItem('reason', value.reason);
      localStorage.setItem('reputation', value.reputation);
      localStorage.setItem('targetAddress', value.targetAddress);
      localStorage.setItem('transactionId', value.transactionId);
      localStorage.setItem('matic', burnedMatic);
    }
  };

  useEffect(() => {
    console.log('>>isPadding>>', isLoading);
  }, [methods.watch('point')]);

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
            burnedMatic={burnedMatic}
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
