import React from 'react';

import { Container, NewPlayList, Nav } from './styles';

import addPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="#">Navigate</a>
        </li>
        <li>
          <a href="#">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Your library</span>
        </li>
        <li>
          <a href="#">Your daily mix</a>
        </li>
        <li>
          <a href="#">Played recently</a>
        </li>
        <li>
          <a href="#">Musics</a>
        </li>
        <li>
          <a href="#">Albums</a>
        </li>
        <li>
          <a href="#">Artists</a>
        </li>
        <li>
          <a href="#">Seasons</a>
        </li>
        <li>
          <a href="#">Local files</a>
        </li>
        <li>
          <a href="#">Videos</a>
        </li>
        <li>
          <a href="#">Podecasts</a>
        </li>
        <li>
          <a href="#">Radio</a>
        </li>
      </Nav>

      <Nav>
      <li>
        <span>Playlists</span>
      </li>
        <li>
          <a href="#">Accappella</a>
        </li>
      </Nav>
    </div>

    <NewPlayList>
      <img src={addPlaylistIcon} alt="Add playlist" />
      New Playlist
    </NewPlayList>
  </Container>
);

export default Sidebar;
