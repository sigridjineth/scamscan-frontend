import styled from '@emotion/styled';
import ScoreBar from '@src/components/common/ScoreBar';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background-image: url('/CheckDetailBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 57%;
  text-align: center;
`;

const StyleProfile = styled.div`
  width: 92px;
  height: 92px;
  background: url('/CheckDetailProfile.png');
  margin-top: 100px;
  display: inline-block;
`;

const StyledAddress = styled.div`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 120%;
  color: #ededed;
  text-align: center;
  margin-top: 56px;
  width: 630px;
  height: 82px;
  overflow-wrap: break-word;
  margin-left: calc(50% - 315px);
`;

const StyledCurrentScore = styled.div`
  margin-top: 56px;
  color: #ededed;
`;

const StyledScore = styled.div`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

function CheckDetail() {
  const router = useRouter();
  const [score, setScore] = useState(-90);
  const { address } = router.query;
  const [tabName, setTabName] = useState('Reputation');

  return (
    <StyledRoot>
      <StyleProfile />
      <StyledAddress>{address}</StyledAddress>
      <StyledCurrentScore>current score</StyledCurrentScore>
      <StyledScore>{score}</StyledScore>
      <div className="mt-[40px]">
        <ScoreBar score={score} />
      </div>
    </StyledRoot>
  );
}

export default CheckDetail;
