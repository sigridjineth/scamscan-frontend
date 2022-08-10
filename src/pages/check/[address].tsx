import styled from '@emotion/styled';
import MintingTab from '@src/components/check/MintingTab';
import Profile from '@src/components/check/Profile';
import ReputationTab from '@src/components/check/ReputationTab';
import ScoreBar from '@src/components/common/ScoreBar';
import { useRouter } from 'next/router';
import { useState } from 'react';

const StyledRoot = styled.section`
  width: 100%;
  min-height: 100%;
  background-image: url('/CheckDetailBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 57%;
  text-align: center;
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

const DashboardContainer = styled.div`
  margin-top: 100px;
  width: 1120px;
  display: inline-block;
  position: relative;
`;

interface tabTiileProps {
  isOn: boolean;
  left: number;
}

const TabTitles = styled.button<tabTiileProps>`
  left: 0;
  font-family: 'Syne';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 105%;
  letter-spacing: 0.03em;
  color: #ffffff;
  opacity: ${({ isOn }) => {
    if (isOn) return 1;
    else return 0.3;
  }};
  left: ${({ left }) => `${left}px`};
  position: absolute;
`;

function CheckDetail() {
  const router = useRouter();
  const [score, setScore] = useState(-90);
  const { address } = router.query;
  const [tabName, setTabName] = useState('Reputation');
  const handleTabClick = (tabName: string) => {
    setTabName(tabName);
  };

  return (
    <StyledRoot>
      <Profile address={address as string} />
      <StyledScore>{score}</StyledScore>
      <div className="mt-[40px]">
        <ScoreBar score={score} />
      </div>
      <DashboardContainer>
        <TabTitles
          left={0}
          isOn={tabName == 'Reputation'}
          onClick={() => {
            handleTabClick('Reputation');
          }}
        >
          Reputation
        </TabTitles>
        <TabTitles
          left={262}
          isOn={tabName == 'Minting'}
          onClick={() => {
            handleTabClick('Minting');
          }}
        >
          Minting
        </TabTitles>
        {tabName == 'Reputation' && <ReputationTab address={address as string} />}
        {tabName == 'Minting' && <MintingTab address={address as string} />}
      </DashboardContainer>
    </StyledRoot>
  );
}

export default CheckDetail;
