import styled from 'styled-components';

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

  > img {
    margin: 20px 0;
    width: 382px;
    height: 272px;
  }

  @media (min-width: 1100px) {
    max-width: 702px;

    > img {
      width: 702px;
      height: 472px;
    }
  }
`;

export const Title = styled.header`
  display: flex;

  a {
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
    margin-top: 15px;
  }
`;

export const Info = styled.section`
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
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    margin-top: 20px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  @media (min-width: 1100px) {
  }
`;
