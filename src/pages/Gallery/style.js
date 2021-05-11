import styled from 'styled-components';

const SGallery = styled.div`
  display: flex;
`;
const SImg = styled.figure`
  width: 400px;
  height: 300px;
  position: relative;
  margin: 15px;

  img {
    width: 100%;
    height: 100%;
  }
  figcaption {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #0008;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.2s all ease-in-out;
    text-transform: uppercase;
    font-weight: bold;
    color: white;

    ::before,
    ::after {
      content: '';
      position: absolute;
      transition: 0.5s all ease-in-out;
    }

    ::before {
      width: 80%;
      height: 90%;
      border-left: 2px solid white;
      border-right: 2px solid white;
      transform: scaleY(0);
    }

    ::after {
      width: 90%;
      height: 80%;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      transform: scaleX(0);
    }

    &:hover {
      opacity: 1;
      ::before {
        transform: scaleY(1);
      }
      ::after {
        transform: scaleX(1);
      }
    }
  }
`;

export { SGallery, SImg };
