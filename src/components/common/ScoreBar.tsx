import styled from '@emotion/styled';
import { body1Regular, titleBold } from '@src/styles';
import React, { useEffect, useState } from 'react';

interface ScoreBarBrops {
  score: number;
}

interface ColoredBarStyleProps {
  left: number;
  right: number;
  color: string;
}

interface ScaledNumberProps {
  score: number;
  color: string;
}

function ScoreBar({ score }: ScoreBarBrops) {
  const [left, setLeft] = useState(50);
  const [right, setRight] = useState(50);
  const [scoreColor, setScoreColor] = useState('');

  useEffect(() => {
    if (score >= 0) {
      setLeft(50);
      setRight(50 - Math.abs(score) / 2);
    } else {
      setLeft(50 - Math.abs(score) / 2);
      setRight(50);
    }
  }, [score]);

  useEffect(() => {
    if (score >= 0) {
      setScoreColor('#27AE60');
    } else {
      setScoreColor('#EB5757');
    }
  }, [score]);

  return (
    <StyledRoot>
      <BackgroundBar />
      <ColoredBar left={left} right={right} color={scoreColor} />
      <ScaledNumber score={-100} color="#FFFFFF">
        -100
      </ScaledNumber>
      <ScaledNumber score={100} color="#FFFFFF">
        100
      </ScaledNumber>
      <ScaledNumber score={0} color="#FFFFFF">
        0
      </ScaledNumber>
      <ScaledNumber score={score} color={scoreColor}>
        {score}
      </ScaledNumber>
    </StyledRoot>
  );
}

export default ScoreBar;

const StyledRoot = styled.section`
  width: 464px;
  height: 38px;
  position: relative;
  display: inline-block;
`;

const BackgroundBar = styled.div`
  position: absolute;
  width: 464px;
  height: 8px;
  top: 0px;
  background: #181818;
  border-radius: 100px;
`;

const ColoredBar = styled.div<ColoredBarStyleProps>`
  position: absolute;
  height: 8px;
  left: ${({ left }) => `${left}%`};
  right: ${({ right }) => `${right}%`};
  top: 0px;
  background: ${({ color }) => color};
  border-radius: 100px;
`;

const ScaledNumber = styled.div<ScaledNumberProps>`
  width: 30px;
  margin-left: -15px;
  bottom: 7px;
  left: ${({ score }) => `${(score + 100) / 2}%`};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  position: absolute;
  color: ${({ color }) => color};
`;
