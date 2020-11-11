import styled from 'styled-components';
import { animationFromBottom } from '../../utils/animations';

export const Container = styled.div`
  animation: ${animationFromBottom} 1.5s;

  text-align: center;

  p {
    margin: 15px 0;
    font-size: 30px;
  }

  svg {
    width: 120px;
    height: 120px;
  }
`;
