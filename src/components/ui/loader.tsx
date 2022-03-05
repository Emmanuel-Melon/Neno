import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 0.4rem solid var(--primary-color);
  border-bottom: 0.4rem solid var(--primary-color);
  border-left: 0.4rem solid var(--primary-color);
  border-right: 0.4rem solid var(--primary-color);
  background: rgb(0, 196, 159, 0.1);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Loader = () => <Container />;