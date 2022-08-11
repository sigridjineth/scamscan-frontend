import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { body1Regular, flexColumn, h1Regular, h2Regular, titleBold } from '@src/styles';
import React, { ReactElement } from 'react';

import Button from './Button';

interface ConfirmModalProps {
  children: any;
}

interface ConfirmModalButtonProps extends ConfirmModalProps {
  onClick: () => void;
}
function ConfirmModal({ children }: ConfirmModalProps) {
  return <StRoot className="z-12">{children}</StRoot>;
}

export default ConfirmModal;

ConfirmModal.Title = function ConfirmModalTitle({ children }: ConfirmModalProps) {
  return <StTitle>{children}</StTitle>;
};

ConfirmModal.Description = function ConfirmModalDescription({ children }: ConfirmModalProps) {
  return <StDescription>{children}</StDescription>;
};

ConfirmModal.Matic = function ConfirmModalMatic({ children }: ConfirmModalProps) {
  return <StCost>{children}</StCost>;
};

ConfirmModal.Button = function ConfirmModalButton({ children, onClick }: ConfirmModalButtonProps) {
  return (
    <StButton>
      <Button onClick={onClick}>{children}</Button>
    </StButton>
  );
};

const StRoot = styled.section`
  width: 640px;
  height: 300px;
  padding: 48px;

  background: #202020;
  border-radius: 20px;
  ${flexColumn}
`;

const StTitle = styled.h2`
  /* margin-top: 0px; */
  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 120%;
  text-align: center;
  color: #ffffff;
`;
const StDescription = styled.p`
  ${body1Regular}
  margin-top: 17px;
  color: #ffffff;
  opacity: 0.5;
`;

const StCost = styled.div`
  ${h1Regular}
  margin-top: 17px;
`;

const StButton = styled.div`
  margin-top: 17px;
`;
