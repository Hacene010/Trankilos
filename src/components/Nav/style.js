import styled from 'styled-components';

const SNav = styled.div`
  width: 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: yellowgreen;
  overflow: hidden;
  transition: 0.1s all;

  &.open {
    width: 25vw;
  }
`;
const SButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  padding: 0;

  img {
    width: 100%;
  }
`;

export { SNav, SButton };
