import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Intro from '@src/components/common/Intro';
import { INTRO_INFO } from '@src/constants';
import { useRouter } from 'next/router';
import Navbar from '@src/components/common/Navbar';
import React, { useState } from 'react';

const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background-image: url('CheckBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 57%;
  text-align: center;
`;

const StyledAddressContainer = styled.div`
  width: 560px;
  height: 180px;

  background: #202020;
  border-radius: 20px;
  margin-top: 80px;
  display: inline-block;
`;

const StyledAddressTitle = styled.div`
  width: 464px;
  height: 19px;

  font-family: 'Syne';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 145%;

  letter-spacing: 0.005em;
  margin-top: 48px;
  color: #ededed;
  text-align: left;
  display: inline-block;
`;

const StyledSubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 80px;
  gap: 4px;

  width: 393px;
  height: 59px;

  background: #ffffff;
  border-radius: 9.43182px;

  margin-top: 100px;
  display: inline-block;
  flex: none;
  order: 2;
  flex-grow: 0;

  font-family: 'Syne';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  color: black;
`;

function Check() {
  const [address, setAddress] = useState('');
  const router = useRouter();
  const handleClick = () => {
    if (address)
      router.push({
        pathname: '/check/confirm',
        query: { checkAddress: address },
      });
    else alert('Fill in a address to check reputation.');
  };

  return (
    <StyledRoot>
      <Navbar />
      <div
        css={css`
          height: 160px;
        `}
      >
        {' '}
      </div>
      <Intro.Title>{INTRO_INFO.CHECK.TITLE}</Intro.Title>
      <Intro.Description>{INTRO_INFO.CHECK.DESCRIPTION}</Intro.Description>
      <StyledAddressContainer>
        <StyledAddressTitle> Target Address </StyledAddressTitle>
        <input
          type="text"
          placeholder="Wallet address or contract address"
          className="input w-[464px] text-[16px] h-[54px] bg-transparent p-[16px] border border-[#2F2F2F] rounded-2xl placeholder-[#6A6A6A] text-white font-normal mt-[11px] bg-[#181818]"
          onChange={(e) => setAddress(e.target.value)}
        />
      </StyledAddressContainer>
      <div>
        <StyledSubmitButton onClick={handleClick}>Check Reputation</StyledSubmitButton>
      </div>
    </StyledRoot>
  );
}

export default Check;
