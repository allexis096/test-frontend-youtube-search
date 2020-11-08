import React, { FormEvent, useCallback, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  Container,
  Content,
  Form,
  YoutubeContent,
  YoutubeCard,
  Info,
} from './styles';
import logoImg from '../../assets/dark-logo.svg';
import api from '../../services/api';
import key from '../../utils/key';
import { useVideo } from '../../hooks/video';

const Dashboard: React.FC = () => {
  const { videos, setVideos } = useVideo();
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const response = await api.get(
        `search?part=id,snippet&q=${inputValue}&maxResults=6&order=viewCount&pageToken=CAoQAA&key=${key.key2}`,
      );

      setIsActive(true);

      setVideos(response.data.items);
    },
    [inputValue, setVideos],
  );

  const fetchMoreVideos = useCallback(async () => {
    const response = await api.get(
      `search?part=id,snippet&q=${inputValue}&maxResults=6&order=viewCount&pageToken=CBAQAA&key=${key.key2}`,
    );

    setVideos(prev => [...prev, ...response.data.items]);
  }, [inputValue, setVideos]);

  return (
    <Container>
      <Content>
        <img
          src={logoImg}
          alt="Logo"
          style={isActive ? { display: 'none' } : { display: 'inherit' }}
        />
        <Form onSubmit={handleSubmit} className={isActive ? 'top-screen' : ''}>
          <TextField
            value={inputValue}
            variant="outlined"
            label="Pesquisar"
            color="primary"
            onChange={e => setInputValue(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Buscar
          </Button>
        </Form>

        <YoutubeContent>
          <InfiniteScroll
            dataLength={videos.length}
            next={fetchMoreVideos}
            hasMore
            loader={isActive ? <h2>Loading... </h2> : ''}
          >
            {videos &&
              videos.map(video => (
                <YoutubeCard key={video.etag}>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt="thumbnail"
                  />
                  <Info>
                    <h2>{video.snippet.title}</h2>
                    <span>{video.snippet.channelTitle}</span>
                    <p>{video.snippet.description}</p>

                    <Link to={`/video/${video.id.videoId}`}>
                      Detalhes do vídeo
                    </Link>
                  </Info>
                </YoutubeCard>
              ))}
          </InfiniteScroll>
        </YoutubeContent>
      </Content>
    </Container>
  );
};

export default Dashboard;
