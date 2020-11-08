import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { VideoProvider } from './hooks/video';
import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <VideoProvider>
          <Routes />
        </VideoProvider>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};

export default App;
