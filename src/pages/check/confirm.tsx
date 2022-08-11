import styled from '@emotion/styled';
import { CheckHeader } from '@src/components/check/CheckHeader';
import MintingTab from '@src/components/check/MintingTab';
import Profile from '@src/components/check/Profile';
import ReputationTab from '@src/components/check/ReputationTab';
import { SBTType } from '@src/components/check/SBT';
import ScoreBar from '@src/components/common/ScoreBar';
import { getCheckContract } from '@src/lib/contract';
import { BigNumber } from 'ethers';
import { useRouter } from 'next/router';
import PreviousMap from 'postcss/lib/previous-map';
import { useEffect, useState } from 'react';

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

interface tabTitleProps {
  isOn: boolean;
  left: number;
}

const TabTitles = styled.button<tabTitleProps>`
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

function Confirm() {
  const router = useRouter();
  const [score, setScore] = useState(0);
  // const [address, setAddress] = useState<string | undefined>(router?.query?.checkAddress);
  const [tabName, setTabName] = useState('Reputation');
  const [contract, setContract] = useState(getCheckContract());
  const [receivedSBTList, setReceivedSBTList] = useState<Array<SBTType>>([]);
  const [sentSBTList, setSentSBTList] = useState<Array<SBTType>>([]);
  const [numOfMinters, setNumOfMinters] = useState(0);
  const [burntAsset, setBurntAsset] = useState(0);

  const handleTabClick = (tabName: string) => {
    setTabName(tabName);
  };

  const getFormattedDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return month + '/' + day + '/' + year;
  };

  const parseReceivedToken = (token: any) => {
    const score = token.score.toNumber();
    const reason = token.reportTypeCode;
    const address = token.from;
    const addressTitle = 'Minter';
    const date = getFormattedDate(token.blockTimestamp.toNumber());
    const transactionID = token.relatedTransactionHash._hex;

    return {
      score,
      reason,
      address,
      addressTitle,
      date,
      transactionID,
    };
  };

  const parseReceivedTokensAtOnce = (tokenArray: any[]) => {
    const resultArray: {
      score: any;
      reason: any;
      address: any;
      addressTitle: string;
      date: string;
      transactionID: any;
    }[] = [];

    tokenArray.map((token) => {
      resultArray.push(parseReceivedToken(token));
    });

    return resultArray;
  };

  const parseSentToken = (token: any) => {
    const score = token.score.toNumber();
    const reason = token.reportTypeCode;
    const address = token.from;
    const addressTitle = 'Receiver';
    const date = getFormattedDate(token.blockTimestamp.toNumber());
    const transactionID = token.relatedTransactionHash._hex;

    return {
      score,
      reason,
      address,
      addressTitle,
      date,
      transactionID,
    };
  };

  const parseSentTokensAtOnce = (tokenArray: any[]) => {
    const resultArray: {
      score: any;
      reason: any;
      address: any;
      addressTitle: string;
      date: string;
      transactionID: any;
    }[] = [];

    tokenArray.map((token) => {
      resultArray.push(parseSentToken(token));
    });

    return resultArray;
  };

  const parseTokens = async () => {
    const contract = await getCheckContract();
    const receivedTokensPromise = contract.receivedTokensOf(router?.query?.checkAddress);

    receivedTokensPromise.then((result: any) => {
      const receivedTokens = result;

      setNumOfMinters(getNumOfMinters(receivedTokens));
      const parsedReceivedTokens = parseReceivedTokensAtOnce(receivedTokens);

      setReceivedSBTList(parsedReceivedTokens);
    });
    const sentTokensPromise = contract.sentTokensOf(router?.query?.checkAddress);

    sentTokensPromise.then((result: any) => {
      const sentTokens = result;

      setBurntAsset(getBurntAsset(sentTokens));
      console.log('sentTokens >>>>>>>>', sentTokens);
      const parsedSentTokens = parseSentTokensAtOnce(sentTokens);

      setSentSBTList(parsedSentTokens);
    });
  };

  const getBurntAsset = (tokens: any[]) => {
    let result = 0;

    tokens.map((tok) => {
      result += tok.amountOfBurntAsset.toNumber();
    });

    return result;
  };

  const getNumOfMinters = (tokens: any[]) => {
    const minterSet = new Set();

    tokens.map((tok) => {
      minterSet.add(tok.from);
    });

    return minterSet.size;
  };

  const connectContract = async () => {
    const contract = await getCheckContract();
    const result = await contract.reputationScoreOf(router?.query?.checkAddress);
    const totalNumber = await contract.balanceOf(router?.query?.checkAddress);

    console.log('>>scoreData', result);

    if (totalNumber.toNumber() != 0) setScore(result?.toNumber() / totalNumber.toNumber());
    else setScore(0);
  };

  useEffect(() => {
    console.log('receivedSBTList', receivedSBTList);
  }, [receivedSBTList]);

  useEffect(() => {
    // console.log(address);
    // const sendPromise = address && contract.reputationScoreOf(address);

    // sendPromise.then((result: BigNumber) => {
    //   setScore(result.toNumber());
    // });
    router?.query?.checkAddress && connectContract();
    router?.query?.checkAddress && parseTokens();
  }, [router?.query?.checkAddress]);

  return (
    <StyledRoot>
      <CheckHeader />
      <Profile address={router?.query?.checkAddress as string} />
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
        {tabName == 'Reputation' && (
          <ReputationTab tokens={receivedSBTList} numOfMinters={numOfMinters} />
        )}
        {tabName == 'Minting' && <MintingTab tokens={sentSBTList} burntAsset={burntAsset} />}
      </DashboardContainer>
    </StyledRoot>
  );
}

export default Confirm;
