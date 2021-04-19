import styled from 'styled-components';

const SParallax = styled.main`
  color: white;
  position: relative;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 8px;
  perspective-origin: 0%;
  display: flex;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(0px);
    background-size: cover;
  }

  .foreground {
    margin-top: auto;
    margin-bottom: 50px;
    transform-origin: 0;
    transform: translateZ(3px);
    // (perspective — distance) / perspective = scaleFactor
    transform: translateZ(3px) scale(0.625);
  }

  .foreground h1 {
    font-size: 36px;
  }
`;
export default SParallax;
