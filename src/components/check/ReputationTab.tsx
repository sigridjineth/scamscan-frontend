import styled from '@emotion/styled';
import React, { useState } from 'react';

import { SBT, SBTType } from './SBT';
import Summary from './Summary';

interface ReputationTabProps {
  tokens: Array<SBTType>;
  numOfMinters: number;
}

const SBTContainer = styled.section`
  width: 1120px;
  display: flex;
  gap: 40px;
  margin-top: 48px;
  margin-left: calc(50% - 560px);
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 104px;
`;

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

function ReputationTab({ tokens, numOfMinters }: ReputationTabProps) {
  return (
    <>
      <Summary
        title1="Total Holding SBT"
        number1={tokens ? tokens.length : 0}
        title2="Total Minters"
        number2={numOfMinters}
      />
      <SBTContainer>
        {tokens?.length > 0 ? (
          tokens?.map((item) => {
            return (
              <SBT
                key={item.transactionID}
                score={item.score}
                reason={item.reason}
                address={item.address}
                addressTitle="Minter"
                date={item.date}
                transactionID={item.transactionID}
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
