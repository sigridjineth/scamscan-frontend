import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Intro from '@src/components/common/Intro';
import { INTRO_INFO } from '@src/constants';
import React from 'react';

const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  background-image: url('MintingBackground.png');
`;

function index() {
  return (
    <StyledRoot>
      <Intro.Title>{INTRO_INFO.MINT.TITLE}</Intro.Title>
      <Intro.Description>{INTRO_INFO.MINT.DESCRIPTION}</Intro.Description>
    </StyledRoot>
    //   <div
    //     css={css`
    //       position: absolute;
    //       width: 1920px;
    //       height: 1372px;
    //       left: 1836px;
    //       top: -142px;
    //       transform: matrix(-1, 0, 0, 1, 0, 0);
    //     `}
    //   >
    //     <div
    //       css={css`
    //         display: flex;
    //         flex-direction: column;
    //         align-items: center;
    //         padding: 0px;
    //         gap: 80px;

    //         width: 560px;
    //         height: 481px;

    //         /* Inside auto layout */

    //         flex: none;
    //         order: 1;
    //         flex-grow: 0;
    //       `}
    //     >
    //       <div
    //         css={css`
    //           margin-top: 350px;
    //           font-family: 'Syne';
    //           font-style: normal;
    //           font-weight: 800;
    //           font-size: 40px;
    //           line-height: 105%;
    //           text-align: center;
    //           letter-spacing: 0.03em;
    //           color: #ffffff;
    //         `}
    //       >
    //         check
    //       </div>
    //       <div
    //         css={css`
    //           font-family: 'Syne';
    //           font-style: normal;
    //           font-weight: 400;
    //           font-size: 16px;
    //           line-height: 145%;
    //           /* or 23px */

    //           text-align: center;
    //           letter-spacing: 0.001em;

    //           color: #ffffff;

    //           opacity: 0.5;
    //         `}
    //       >
    //         Check reputation of the address you want to check.
    //       </div>
    //     </div>
    //   </div>
    // );
  );
}

export default index;
