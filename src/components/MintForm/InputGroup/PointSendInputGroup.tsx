// PointSendInputGroup
import styled from '@emotion/styled';
import ScoreBar from '@src/components/common/ScoreBar';
import {
  body1Regular,
  body2Bold,
  body2Regular,
  body3Regular,
  flexColumn,
  h1Regular,
} from '@src/styles';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface PointSendInputGroupProps {
  averageScore: number;
}

function PointSendInputGroup({ averageScore }: PointSendInputGroupProps) {
  const {
    register,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const value = getValues();

  console.log('>>value', value);

  return (
    <StRoot>
      <StAddress>0xa50...Ee9CB’s Score</StAddress>
      <StScore>{averageScore}</StScore>
      <ScoreBar score={averageScore} />
      <StCheckBoxGroup>
        <label
          htmlFor="radio-1"
          className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input type="radio" value="good" className="radio" {...register('reputation')} />
          Send Good Reputation
        </label>
        <label
          htmlFor="radio-1"
          className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input className="radio" type="radio" value="bad" {...register('reputation')} />
          Send Bad Reputation
        </label>
      </StCheckBoxGroup>
      <label htmlFor="point">
        Point
        <input
          type="number"
          placeholder="0-100"
          className="input w-full h-[54px] mt-[11px] mb-[40px]"
          {...register('point')}
        />
      </label>
      <label htmlFor="reason">
        Reason
        <input
          type="select"
          placeholder="Selected the Reason"
          className="input w-full h-[54px] mt-[11px] mb-[40px]"
          {...register('reason')}
        />
      </label>
      <label htmlFor="mintCost">Mint Cost</label>
      <div></div>
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
    margin-top: 40px;
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

const StAddress = styled.p`
  ${body3Regular}
`;

const StScore = styled.h2`
  ${h1Regular}
  margin-top: 11px;
  margin-bottom: 20px;
`;

const StCheckBoxGroup = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 48px;
  & label {
    ${body2Regular}
    display: flex;
    align-items: center;
    height: 20px;
    & input {
      margin-right: 8px;
      height: 20px;
      width: 20px;
      background: transparent !important;
    }
  }
`;
