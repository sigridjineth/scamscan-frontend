import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import Button from '../common/Button';
import PointSendInputGroup from './InputGroup/PointSendInputGroup';
import TxCheckInputGroup from './InputGroup/TxCheckInputGroup';

interface MintFormProps {
  setIsToast: Dispatch<SetStateAction<boolean>>;
}

function MintForm({ setIsToast }: MintFormProps) {
  const methods = useForm();
  const [isPadding, setIsPadding] = useState<boolean>(false);
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
    console.log('>>isPadding>>', isPadding);
  }, [isPadding]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TxCheckInputGroup
          isPadding={isPadding}
          setIsPadding={setIsPadding}
          setAverageScore={setAverageScore}
        />
        <PointSendInputGroup averageScore={averageScore} />

        <Button type="submit">Send Reputation</Button>
      </form>
    </FormProvider>
  );
}

export default MintForm;
