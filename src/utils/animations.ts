import { keyframes } from 'styled-components';

export const animationFromTop = keyframes`
  from {
    opacity: 1;
    transform: translateY(-400px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const animationFromBottom = keyframes`
  from {
    opacity: 1;
    transform: translateY(150px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const animationFromRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(150px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const animationFromLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(-150px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;
