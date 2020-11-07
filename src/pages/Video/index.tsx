import React from 'react';
import {
  ArrowBack,
  ThumbUpAlt,
  ThumbDown,
  Visibility,
} from '@material-ui/icons';
import logoImg from '../../assets/dark-logo.svg';

import { YoutubeVideo, Title, Info, Likes, Description } from './styles';

const Video: React.FC = () => {
  return (
    <YoutubeVideo>
      <Title>
        <ArrowBack />
        <h2>Titulo do video 1</h2>
      </Title>
      <img src={logoImg} alt="thumbnail" />
      <Info>
        <span>Nome do canal</span>
        <Likes>
          <div>
            <ThumbUpAlt />
            <span>123</span>
          </div>

          <div>
            <ThumbDown />
            <span>234</span>
          </div>
        </Likes>
      </Info>
      <Description>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          aliquet ipsum et nisl ultricies tincidunt. Nam malesuada diam quis dui
          bibendum, ut molestie sapien ullamcorper. Aliquam imperdiet tellus
          auctor nunc volutpat aliquet. Nulla at accumsan tortor, vulputate
          porttitor lacus. Vestibulum sit amet tortor nisl. Etiam cursus
          suscipit dapibus.
        </p>
        <Visibility />
      </Description>
    </YoutubeVideo>
  );
};

export default Video;
