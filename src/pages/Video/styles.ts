import styled from 'styled-components';
import { animationFromLeft, animationFromRight } from '../../utils/animations';

export const OnError = styled.div`
  height: 100vh;
  a {
    color: #ff0000;
    position: absolute;
    left: 5px;

    > svg {
      width: 60px;
      height: 60px;
    }
  }
`;

export const YoutubeVideo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  max-width: 382px;
  margin: 0 auto;

  > iframe {
    animation: ${animationFromRight} 1.5s;
    margin: 20px 0;
    width: 382px;
    height: 272px;
  }

  @media (min-width: 1100px) {
    max-width: 702px;

    > iframe {
      width: 702px;
      height: 472px;
    }
  }
`;

export const Title = styled.header`
  display: flex;

  a {
    animation: ${animationFromLeft} 1.5s;
    text-decoration: none;
    color: #ff0000;
    position: absolute;
    left: 10px;

    > svg {
      width: 60px;
      height: 60px;
    }
  }

  h2 {
    animation: ${animationFromLeft} 1.5s;
    margin-top: 15px;
  }
`;

export const Info = styled.section`
  animation: ${animationFromLeft} 1.5s;
  display: flex;
  justify-content: space-between;
  width: 95%;

  > span {
    font-weight: bold;
  }
`;

export const Likes = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55px;
    font-weight: bold;

    & + div {
      margin-left: 50px;
      font-weight: bold;
    }
  }
`;

export const Description = styled.main`
  margin-top: 20px;

  pre {
    animation: ${animationFromRight} 1.5s;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #ebf5ee;
    border-radius: 5px;
    padding: 5px;
  }

  div {
    animation: ${animationFromLeft} 1.5s;
    margin-top: 20px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;
