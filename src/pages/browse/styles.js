import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 110px;
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const List = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const PlayList = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  img { height: 250px; }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #ffffff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:first-child { margin: 0; }

  &:hover img { opacity: 0.4; }
`;
