import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const StyledRoot = styled.section`
  width: 100%;
  height: 108px;
  display: flex;
  padding-top: 45px;
  padding-left: 53px;
`;

const BackButton = styled.button`
  width: 18.67px;
  height: 18.67px;
  background: url('/BackButton.png');
  background-size: cover;
`;

const Title = styled.div`
  margin-left: 21px;
  font-family: 'Syne';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 105%;
  color: #ffffff;
`;

export function CheckHeader() {
  const router = useRouter();

  return (
    <StyledRoot>
      <BackButton onClick={() => router.back()}></BackButton>
      <Title>Check</Title>
    </StyledRoot>
  );
}
