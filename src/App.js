import React from "react";
import { BrowserRouter } from "react-router-dom";

// Reactotron
import './config/reactotron';

// Routes
import Routes from './routes';

// General styles
import GlobalStyle from "./styles/global";

//Styled Compoents
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

// General styled components
import { Wrapper, Container, Content } from "./styles/components";

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>

      <Player />

      <GlobalStyle />
    </Wrapper>
  </BrowserRouter>
);

export default App;
