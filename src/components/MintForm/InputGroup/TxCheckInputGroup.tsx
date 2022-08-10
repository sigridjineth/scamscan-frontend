import styled from '@emotion/styled';
import CheckCircle from '@src/assets/icon/check_circle.svg';
import XCircle from '@src/assets/icon/x_circle.svg';
import { body1Regular, body2Bold, body3Regular } from '@src/styles';
import { checkTxValidation } from '@src/utils/checkTx';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TxCheckFormInput {
  targetAddress: string;
  transactionId: string;
}

function TxCheckInputGroup() {
  const {
    register,
    setError,
    getValues,
    formState: { errors },
  } = useFormContext<TxCheckFormInput>();

  const targetAddress = register('targetAddress');
  const transactionId = register('transactionId');

  const handleClick = async () => {
    setError('targetAddress', {
      type: 'manual',
      message: 'Loading',
    });
    setError('transactionId', {
      type: 'manual',
      message: 'Loading',
    });
    const values = getValues();

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
  };

  return (
    <StRoot>
      <label htmlFor="targetAddress">
        Target Address
        {errors?.targetAddress?.message === 'Loading' && <div>로딩중</div>}
        {errors?.targetAddress?.message === 'Failed' && <XCircle />}
        {errors?.targetAddress?.message === 'Success' && <CheckCircle />}
      </label>
      <input
        type="text"
        placeholder="Wallet address or contract address"
        className="input w-full h-[54px] mt-[11px] mb-[40px]"
        {...register('targetAddress')}
        onChange={(e) => {
          targetAddress.onChange(e);
          setError('targetAddress', {
            type: 'manual',
            message: 'Error Reset',
          });
        }}
      />
      <label htmlFor="transactionId">
        Transaction id
        {errors?.transactionId?.message === 'Loading' && <div>로딩중</div>}
        {errors?.transactionId?.message === 'Failed' && <XCircle />}
        {errors?.transactionId?.message === 'Success' && <CheckCircle />}
      </label>
      <input
        type="text"
        placeholder="Paste Txid to prove your trasaction."
        className="input w-full h-[54px] mt-[11px]"
        {...register('transactionId')}
        onChange={(e) => {
          transactionId.onChange(e);
          setError('transactionId', {
            type: 'manual',
            message: 'Error Reset',
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

const StRoot = styled.section`
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
    ${body1Regular}
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
