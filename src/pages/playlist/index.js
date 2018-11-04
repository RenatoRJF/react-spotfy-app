import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81lo1N1%2BFmL._SY355_.jpg"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Gospel songs</h1>
        <p>10 musics</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>
            <img src={ClockIcon} alt="duration" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="add" />
          </td>
          <td>O Holy Night</td>
          <td>David Phelps</td>
          <td>O Holy Night</td>
          <td>4:07</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
