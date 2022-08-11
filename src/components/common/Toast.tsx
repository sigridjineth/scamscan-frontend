/* eslint-disable no-tabs */
import styled from '@emotion/styled';
import Warning from '@src/assets/icon/warning.svg';
import { useEffect, useState } from 'react';

interface Toast {
  _onClick?: () => void;
}

function Toast(props: Toast) {
  const { _onClick } = props;

  return (
    <div
      className="toast toast-top toast-end z-30 max-w-2xl	m-4"
      style={{ filter: 'drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.12));' }}
    >
      <div className="bg-white rounded-md p-4 alert alert-info">
        <div className="text-black text-2xl flex">
          <div className="pr-2">
            <Warning />
          </div>
          Please check to fill all field.
        </div>
        <button
          onClick={_onClick}
          className="btn btn-primary bg-transparent text-black font-black border-0"
        >
          Okay
        </button>
      </div>
    </div>
  );
}

export default Toast;
