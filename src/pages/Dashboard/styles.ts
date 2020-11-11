import styled from 'styled-components';
import { animationFromTop } from '../../utils/animations';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  position: relative;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;

  > img {
    animation: ${animationFromTop} 1.5s;

    width: 100px;
    height: 100px;
  }
`;

export const Form = styled.form`
  animation: ${animationFromTop} 1.5s;

  &.top-screen {
    margin-top: 15px;
  }

  .MuiButton-containedPrimary {
    height: 56px;
    margin-left: 5px;

    background-color: #ff2e00;

    &:hover {
      background-color: #ff0000;
    }
  }
`;

export const YoutubeContent = styled.div`
  animation: ${animationFromTop} 1.5s;

  @media (min-width: 1100px) {
    .infinite-scroll-component {
      display: grid;

      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }
  }
`;

export const YoutubeCard = styled.div`
  padding: 0 20px 20px;
  max-width: 400px;
  border-radius: 5px;
  background-color: #ebf5ee;

  margin: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > img {
    margin: 20px 0;
    width: 352px;
    height: 242px;
  }
`;

export const Info = styled.div`
  line-height: 25px;

  h2 {
    font-size: 20px;
  }

  span {
    display: block;
    margin: 10px 0;
    font-weight: bold;
  }

  p {
    margin-bottom: 15px;
    padding-right: 20px;
  }

  a {
    text-decoration: none;
    color: #000;
    background-color: #d8d8d8;
    text-transform: uppercase;
    padding: 10px;

    transition: background-color 0.3s;
    &:hover {
      background-color: #a6aaad;
    }
  }

  @media (min-width: 1100px) {
    p {
      max-width: 360px;
    }
  }
`;
