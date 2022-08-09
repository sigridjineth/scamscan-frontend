import { css } from '@emotion/react';
import reset from 'emotion-reset';
export const global = css`
  ${reset}
  html,
  body {
    font-size: 10px;
    font-family: 'Syne', sans-serif;
  }
`;
