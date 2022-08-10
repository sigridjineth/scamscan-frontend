import styled from '@emotion/styled';

interface SummaryProps {
  title1: string;
  title2: string;
  number1: number;
  number2: number;
}

const SummaryContainer = styled.section`
  margin-top: 73px;
  height: 155px;
  background: #181818;
  border-radius: 20px;
  padding: 48px;
  display: flex;
`;

const SummaryTitle = styled.div`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 145%;
  letter-spacing: 0.005em;
  color: #ededed;
  width: 110px;
`;

const SummaryNumber = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

function Summary({ title1, title2, number1, number2 }: SummaryProps) {
  return (
    <SummaryContainer>
      <div className="w-[102px] text-left">
        <SummaryTitle> {title1} </SummaryTitle>
        <SummaryNumber> {number1} </SummaryNumber>
      </div>
      <div className="w-[102px] text-left ml-[56px]">
        <SummaryTitle> {title2} </SummaryTitle>
        <SummaryNumber> {number2} </SummaryNumber>
      </div>
    </SummaryContainer>
  );
}

export default Summary;
