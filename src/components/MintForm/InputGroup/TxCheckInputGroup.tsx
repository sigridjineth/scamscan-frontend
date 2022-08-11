import styled from '@emotion/styled';
import { getMintContract } from '@src/lib/contract';
import { body1Regular, body2Bold, body3Regular } from '@src/styles';
import { checkTxValidation } from '@src/utils/checkTx';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import StatusChecker from '../StatusChecker';

interface TxCheckFormInput {
  targetAddress: string;
  transactionId: string;
}

interface Status {
  isPadding: boolean;
}

interface TxCheckInputGroupProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setAverageScore: Dispatch<SetStateAction<number>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
}
function TxCheckInputGroup({
  setIsLoading,
  setAverageScore,
  setIsSuccess,
}: TxCheckInputGroupProps) {
  const {
    register,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<TxCheckFormInput>();
  const [isPadding, setIsPadding] = useState<boolean>(false);

  const targetAddress = register('targetAddress');
  const transactionId = register('transactionId');

  const handleClick = async () => {
    setIsPadding(true);
    setIsLoading(true);
    setError('targetAddress', {
      type: 'manual',
      message: 'Loading',
    });
    setError('transactionId', {
      type: 'manual',
      message: 'Loading',
    });
    const values = getValues();

    console.log('>>values', values);

    const result = await checkTxValidation({
      transactionId: values?.transactionId,
      targetAddress: values?.targetAddress,
    });

    console.log('>>>result', result);

    setError('targetAddress', {
      type: 'manual',
      message: result['targetAddress'],
    });
    setError('transactionId', {
      type: 'manual',
      message: result['transactionId'],
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 100);

    if (result.targetAddress === 'Success' && result.transactionId === 'Success') {
      const mintContract = await getMintContract();

      setIsSuccess(true);

      const allCount = await mintContract.balanceOf(values?.targetAddress);
      const allScore = await mintContract.reputationScoreOf(values?.targetAddress);

      if (allCount.toNumber() === 0) {
        setAverageScore(0);
        localStorage.setItem('averageScore', JSON.stringify(0));
      } else {
        setAverageScore(allScore.toNumber() / allCount.toNumber());
        localStorage.setItem(
          'averageScore',
          JSON.stringify(allScore.toNumber() / allCount.toNumber()),
        );
      }
    }
  };

  return (
    <StRoot isPadding={isPadding}>
      <label htmlFor="targetAddress">
        Target Address
        <StatusChecker status={errors?.targetAddress?.message} />
      </label>
      <input
        type="text"
        placeholder="Wallet address or contract address"
        className="input w-full h-[54px] mt-[11px] mb-[40px]"
        {...register('targetAddress')}
        onChange={(e) => {
          targetAddress.onChange(e);
          setIsPadding(false);
          setError('targetAddress', {
            type: 'manual',
            message: 'Reset',
          });
        }}
      />
      <label htmlFor="transactionId">
        Transaction id
        <StatusChecker status={errors?.transactionId?.message} />
      </label>
      <input
        type="text"
        placeholder="Paste Txid to prove your trasaction."
        className="input w-full h-[54px] mt-[11px]"
        {...register('transactionId')}
        onChange={(e) => {
          transactionId.onChange(e);
          setIsPadding(false);
          setError('transactionId', {
            type: 'manual',
            message: 'Reset',
          });
        }}
      />
      <button type="button" onClick={handleClick}>
        Check
      </button>
    </StRoot>
  );
}

export default TxCheckInputGroup;

const StRoot = styled.section<Status>`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 398px;
  background: #202020;
  border-radius: 20px;
  margin-top: 20px;
  padding: 48px 48px;
  & input {
    background: #181818;
    border-radius: 10px;
    padding-right: ${({ isPadding }) => isPadding && '42px;'} ${body1Regular};
  }
  & label {
    ${body3Regular}
    position: relative;
    & svg {
      position: absolute;
      top: 45px;
      left: 430px;
    }
  }
  & button {
    width: 100%;
    height: 54px;
    background: #181818;
    border: 1px solid #2f2f2f;
    border-radius: 10px;
    ${body2Bold}
    margin-top: 40px;
  }
`;
