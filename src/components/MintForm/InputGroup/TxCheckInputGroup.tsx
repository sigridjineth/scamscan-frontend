import styled from '@emotion/styled';
import CheckCircle from '@src/assets/icon/check_circle.svg';
import XCircle from '@src/assets/icon/x_circle.svg';
import { body1Regular, body2Bold, body3Regular } from '@src/styles';
import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';

interface TxCheckFormInput {
  targetAddress: string;
  transactionId: string;
}

function TxCheckInputGroup() {
  const { register } = useFormContext();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TxCheckFormInput>();

  const targetAddress = register('targetAddress');
  const transactionId = register('transactionId');

  React.useEffect(() => {
    console.log('>>>errors', errors);
  }, [errors.targetAddress, errors.transactionId]);

  const handleClick = () => {
    console.log('>>이제 검증로직을 시작할거야.');
    /*
          setError('targetAddress', {
            type: 'manual',
            message: 'Error message',
          });
          이런 식으로 에러 세팅
    */
    /*
   
   */
    setError('targetAddress', {
      type: 'manual',
      message: 'Failed',
    });
    setError('transactionId', {
      type: 'manual',
      message: 'Failed',
    });
  };

  return (
    <StRoot>
      <label htmlFor="targetAddress">
        Target Address
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
