import styled from '@emotion/styled';
import React from 'react';

function LodingInputGroup() {
  return (
    <StRoot>
      <div className="animate-pulse flex space-x-4 w-full">
        <div className="flex-1 space-y-6 py-1">
          <div className="w-30 h-5 rounded bg-slate-700 mb-10" />
          <div className="short__custom rounded bg-slate-700 mb-10" />
          <div className="h-10 bg-slate-700 rounded mb-[47px]"></div>
          <div className="flex__wrapper">
            <div className="bg-slate-700 rounded short__custom--50"></div>
            <div className="bg-slate-700 rounded short__custom--50"></div>
          </div>
          <div className="h-10 bg-slate-700 rounded w-[30%] mb-10" />
          <div className="h-[50px] bg-slate-700 rounded line__margin"></div>
          <div className="h-10 bg-slate-700 rounded w-[30%] mb-10" />
          <div className="h-[50px] bg-slate-700 rounded line__margin"></div>
          <div className="h-[250px] bg-slate-700 rounded line__margin"></div>
          <div className="short__custom rounded bg-slate-700 mb-10" />
        </div>
      </div>
    </StRoot>
  );
}

export default LodingInputGroup;

const StRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 842px;
  background: #202020;
  border-radius: 20px;
  margin-top: 20px;
  padding: 48px 48px;
  .short__custom {
    width: 30%;
    height: 54px;
  }
  .short__custom--50 {
    width: 48%;
    height: 30px;
  }
  .flex__wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 47px;
  }
  .line__margin {
    margin-bottom: 47px;
  }
`;
