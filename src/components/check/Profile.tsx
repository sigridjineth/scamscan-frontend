import styled from '@emotion/styled';

interface ProfileProps {
  address: string;
}

const StyleProfile = styled.div`
  width: 92px;
  height: 92px;
  background: url('/CheckDetailProfile.png');
  margin-top: 100px;
  display: inline-block;
`;

const StyledAddress = styled.div`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 120%;
  color: #ededed;
  text-align: center;
  margin-top: 56px;
  width: 630px;
  height: 82px;
  overflow-wrap: break-word;
  margin-left: calc(50% - 315px);
`;

const StyledCurrentScore = styled.div`
  margin-top: 56px;
  color: #ededed;
`;

function Profile({ address }: ProfileProps) {
  return (
    <>
      <StyleProfile />
      <StyledAddress>{address}</StyledAddress>
      <StyledCurrentScore>current score</StyledCurrentScore>
    </>
  );
}

export default Profile;
