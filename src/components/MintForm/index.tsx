import React from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import Button from '../common/Button';
import PointSendInputGroup from './InputGroup/PointSendInputGroup';
import TxCheckInputGroup from './InputGroup/TxCheckInputGroup';

function MintForm() {
  const methods = useForm();
  // const { getValues } = useFormContext();
  const onSubmit = (data) => {
    const value = methods.getValues();

    console.log('>>value', value);
    console.log('>>data', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TxCheckInputGroup />
        <PointSendInputGroup />

        <Button type="submit">Send Reputation</Button>
      </form>
    </FormProvider>
  );
}

export default MintForm;
