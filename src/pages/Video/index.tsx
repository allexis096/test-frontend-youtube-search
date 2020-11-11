import React, { useEffect, useState } from 'react';
import {
  ArrowBack,
  ThumbUpAlt,
  ThumbDown,
  Visibility,
} from '@material-ui/icons';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  OnError,
  YoutubeVideo,
  Title,
  Info,
  Likes,
  Description,
} from './styles';
import api from '../../services/api';
import key from '../../utils/key';
import Error from '../../components/Error';

interface VideoProps {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    dislikeCount: string;
    likeCount: string;
    viewCount: string;
  };
}

interface VideoParams {
  video: string;
}

const Video: React.FC = () => {
  const { params } = useRouteMatch<VideoParams>();

  const [video, setVideo] = useState<VideoProps>();
  const [errorVideo, setErrorVideo] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get(
        `videos?id=${params.video}&part=snippet,statistics&key=${key.key}`,
      );

      if (response.data.items[0] === undefined) {
        setErrorVideo(true);
      }

      setVideo(response.data.items[0]);
    })();
  }, [params.video]);

  return (
    <>
      {errorVideo && (
        <OnError>
          <Link to="/">
            <ArrowBack />
          </Link>
          <Error
            messageDescription="ID do vídeo não encontrado."
            messageBack="Clique na seta à esquerda para voltar."
          />
        </OnError>
      )}
      <YoutubeVideo>
        {video && (
          <>
            <Title>
              <Link to="/">
                <ArrowBack />
              </Link>
              <h2>{video.snippet.title}</h2>
            </Title>
            <iframe
              title="youtube"
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <Info>
              <span>{video.snippet.channelTitle}</span>
              <Likes>
                <div>
                  <ThumbUpAlt style={{ color: '#2D88FF' }} />
                  {new Intl.NumberFormat('pt-BR').format(
                    Number(video.statistics.likeCount),
                  )}
                </div>

                <div>
                  <ThumbDown style={{ color: '#ff0000' }} />
                  {new Intl.NumberFormat('pt-BR').format(
                    Number(video.statistics.dislikeCount),
                  )}
                </div>
              </Likes>
            </Info>
            <Description>
              <pre>{video.snippet.description}</pre>
              <div>
                <Visibility />
                <span>
                  {new Intl.NumberFormat('pt-BR').format(
                    Number(video.statistics.viewCount),
                  )}
                </span>
              </div>
            </Description>
          </>
        )}
      </YoutubeVideo>
    </>
  );
};

export default Video;
