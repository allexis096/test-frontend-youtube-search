import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface YoutubeProps {
  etag: string;
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface VideoContextProps {
  videos: YoutubeProps[];
  setVideos: Dispatch<SetStateAction<YoutubeProps[]>>;

  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const VideoContext = createContext<VideoContextProps>({} as VideoContextProps);

export const VideoProvider: React.FC = ({ children }) => {
  const [videos, setVideos] = useState<YoutubeProps[]>([]);
  const [token, setToken] = useState('');

  return (
    <VideoContext.Provider value={{ videos, setVideos, token, setToken }}>
      {children}
    </VideoContext.Provider>
  );
};

export function useVideo(): VideoContextProps {
  const context = useContext(VideoContext);

  return context;
}
