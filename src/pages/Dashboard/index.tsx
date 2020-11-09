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
import Error from '../../components/Error';

const Dashboard: React.FC = () => {
  const { videos, setVideos, token, setToken } = useVideo();

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (inputValue === '') {
        setError(true);
        return;
      }
      setError(false);

      const response = await api.get(
        `search?part=id,snippet&q=${inputValue}&maxResults=6&order=viewCount&pageToken=CAoQAA&key=${key.key2}`,
      );

      setIsActive(true);

      setToken(response.data.nextPageToken);

      setVideos(response.data.items);
    },
    [inputValue, setVideos, setToken],
  );

  const fetchMoreVideos = useCallback(async () => {
    const response = await api.get(
      `search?part=id,snippet&q=${inputValue}&maxResults=6&order=viewCount&pageToken=${token}&key=${key.key2}`,
    );

    setToken(response.data.nextPageToken);

    setVideos(prev => [...prev, ...response.data.items]);
  }, [inputValue, token, setVideos, setToken]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />
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
          {error && (
            <Error
              messageDescription="Não encontramos vídeos com o termo buscado."
              messageBack="Utilize outras palavras-chave."
            />
          )}
          <InfiniteScroll
            dataLength={videos.length}
            next={fetchMoreVideos}
            hasMore
            loader={isActive ? <h2>Loading... </h2> : ''}
          >
            {videos &&
              videos.map(video => (
                <YoutubeCard
                  key={video.id.videoId || video.snippet.thumbnails.medium.url}
                >
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
