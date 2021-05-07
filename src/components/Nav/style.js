import styled from 'styled-components';

const SNav = styled.div`
  width: 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  transition: 0.1s all;
  background-color: #084663;
  color: white;
  font-size: 1.3em;

  &.open {
    width: 25vw;
  }

  & > * {
    margin: 10px;
  }

  a {
    color: white;
  }

  li {
    margin-top: 2px;
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
  transition: 0.1s all ease-in-out;

  &:hover {
    transform: rotate(-30deg);
    background-color: #084663;
  }

  img {
    width: 100%;
  }
`;

export { SNav, SButton };
