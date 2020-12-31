import styled, { keyframes } from 'styled-components';

const WrapperSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const ContentSpinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

export default function Spinner() {
  return (
    <WrapperSpinner>
      <ContentSpinner />
    </WrapperSpinner>
  );
}
