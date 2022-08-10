import styled from '@emotion/styled';
import { connectMetamask } from '@src/utils/connectWallet';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@src/components/common/Navbar';
import Title from '@src/assets/title.svg';
import Button from '@src/components/common/Button';
import Toast from '@src/components/common/Toast';
import { useRouter } from 'next/router';

const Feed: NextPage = () => {
  const router = useRouter();
  const [isToast, setIsToast] = useState<boolean>();

  useEffect(() => {
    setTimeout(() => {
      setIsToast(true);
      // setTimeout(() => {
      //   setIsToast(false);
      // }, 2000);
    }, 2000);
  }, []);

  return (
    <Styled.Page>
      <Head>
        <title>Scam Scan</title>
        <meta name="description" content="Scan Scab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {isToast && <Toast _onClick={() => setIsToast(false)} />}
      <div className="text-center text-white w-fit m-auto h-screen grid content-center bg-[url('../assets/background/main.png')] bg-cover bg-bottom	">
        <div className="w-fit m-auto">
          <Title />
        </div>
        <p className="text-3xl font-normal opacity-60	mt-8 mb-16">
          Mint bad reputation as Soul Bound Token to scammers. <br />
          Protect your precious assets.
        </p>
        <div className="m-auto  mb-12">
          <Button _onClick={() => router.push('/mint')}>Mint</Button>
        </div>
      </div>
    </Styled.Page>
  );
};

export default Feed;

const Styled = {
  Page: styled.div`
    h1 {
      font-family: 'Syne';
    }
    width: 100vw;
    & > * {
      width: 100%;
    }
  `,
};
