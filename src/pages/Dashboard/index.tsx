import React, { FormEvent, useCallback, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import { Link } from 'react-router-dom';
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

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsActive(true);

      // const response = await api.get(
      //   `search?part=id,snippet&q=${inputValue}&key=${key.key}`,
      // );

      // console.log(response.data);
    },
    [],
  );

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
          <YoutubeCard>
            <img src={logoImg} alt="thumbnail" />
            <Info>
              <h2>My name is Barry Allen</h2>
              <span>The Flash</span>
              <p>
                My name is Barry Allen and Im the fastest man alive. When I was
                a child, I saw my mother killed by something impossible. My
                father went to prison for her murder. Then an accident made me
                the impossible.
              </p>

              <Link to="/">Detalhes do vídeo</Link>
            </Info>
          </YoutubeCard>

          <YoutubeCard>
            <img src={logoImg} alt="thumbnail" />
            <Info>
              <h2>My name is Barry Allen</h2>
              <span>The Flash</span>
              <p>
                My name is Barry Allen and Im the fastest man alive. When I was
                a child, I saw my mother killed by something impossible. My
                father went to prison for her murder. Then an accident made me
                the impossible.
              </p>

              <Link to="/">Detalhes do vídeo</Link>
            </Info>
          </YoutubeCard>

          <YoutubeCard>
            <img src={logoImg} alt="thumbnail" />
            <Info>
              <h2>My name is Barry Allen</h2>
              <span>The Flash</span>
              <p>
                My name is Barry Allen and Im the fastest man alive. When I was
                a child, I saw my mother killed by something impossible. My
                father went to prison for her murder. Then an accident made me
                the impossible.
              </p>

              <Link to="/">Detalhes do vídeo</Link>
            </Info>
          </YoutubeCard>

          <YoutubeCard>
            <img src={logoImg} alt="thumbnail" />
            <Info>
              <h2>My name is Barry Allen</h2>
              <span>The Flash</span>
              <p>
                My name is Barry Allen and Im the fastest man alive. When I was
                a child, I saw my mother killed by something impossible. My
                father went to prison for her murder. Then an accident made me
                the impossible.
              </p>

              <Link to="/">Detalhes do vídeo</Link>
            </Info>
          </YoutubeCard>

          <YoutubeCard>
            <img src={logoImg} alt="thumbnail" />
            <Info>
              <h2>My name is Barry Allen</h2>
              <span>The Flash</span>
              <p>
                My name is Barry Allen and Im the fastest man alive. When I was
                a child, I saw my mother killed by something impossible. My
                father went to prison for her murder. Then an accident made me
                the impossible.
              </p>

              <Link to="/">Detalhes do vídeo</Link>
            </Info>
          </YoutubeCard>

          <YoutubeCard>
            <img src={logoImg} alt="thumbnail" />
            <Info>
              <h2>My name is Barry Allen</h2>
              <span>The Flash</span>
              <p>
                My name is Barry Allen and Im the fastest man alive. When I was
                a child, I saw my mother killed by something impossible. My
                father went to prison for her murder. Then an accident made me
                the impossible.
              </p>

              <Link to="/">Detalhes do vídeo</Link>
            </Info>
          </YoutubeCard>
        </YoutubeContent>
      </Content>
    </Container>
  );
};

export default Dashboard;
