// PointSendInputGroup
import styled from '@emotion/styled';
import ScoreBar from '@src/components/common/ScoreBar';
import { body1Regular, body2Bold, body3Regular, flexColumn } from '@src/styles';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function PointSendInputGroup() {
  const {
    register,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <StRoot>
      <ScoreBar score={+41} />
    </StRoot>
  );
}

export default PointSendInputGroup;

const StRoot = styled.section`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 842px;
  background: #202020;
  border-radius: 20px;
  margin-top: 20px;
  padding: 48px 48px;
  & input {
    background: #181818;
    border-radius: 10px;
    ${body1Regular};
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
