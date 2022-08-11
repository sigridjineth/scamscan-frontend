import '@src/styles/globals.css';

import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { body1Regular } from '@src/styles';
import { global } from '@src/styles/global';
import theme from '@src/styles/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StDesktop>
        <Global styles={global} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StDesktop>
      <StMobile className="bg-[url('../assets/background/main.png')]">
        Please use the desktop view 👻
      </StMobile>
    </>
  );
}

export default MyApp;

const StDesktop = styled.section`
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const StMobile = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${body1Regular}
  @media (min-width: 1025px) {
    display: none;
  }
`;
