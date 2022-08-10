import styled from '@emotion/styled';
import React, { useState } from 'react';

import SBT from './SBT';
import Summary from './Summary';

interface ReputationTabProps {
  address: string;
}

const SBTContainer = styled.section`
  width: 1120px;
  display: flex;
  gap: 40px;
  margin-top: 48px;
  margin-left: calc(50% - 560px);
`;

interface SBTType {
  score: number;
  reason: string;
  address: string;
  addressTitle: string;
  date: string;
  trasactionID: string;
}

const NoHistories = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  width: 100%;
  color: #ffffff;
  margin-top: 100px;
  margin-bottom: 200px;
`;

function ReputationTab({ address }: ReputationTabProps) {
  const [SBTList, setSBTList] = useState<Array<SBTType>>([]);

  return (
    <>
      <Summary title1="Total Holding SBT" number1={500} title2="Total Minters" number2={48} />
      <SBTContainer>
        {SBTList?.length > 0 ? (
          SBTList?.map((item) => {
            return (
              <SBT
                key={item.address}
                score={item.score}
                reason={item.reason}
                address={item.address}
                addressTitle="Minter"
                date={item.date}
                trasactionID={item.trasactionID}
              />
            );
          })
        ) : (
          <NoHistories>No Histories</NoHistories>
        )}
      </SBTContainer>
    </>
  );
}

export default ReputationTab;
