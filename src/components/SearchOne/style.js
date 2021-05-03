import styled from 'styled-components';

const SSearchOne = styled.div`
  width: 250px;
  position: relative;

  & > * {
    width: 100%;
    box-sizing: border-box;
  }
  .result {
    position: absolute;
    width: 100%;

    border: 1px solid lightgrey;
    background-color: white;
    height: 3em;
    display: flex;
    align-items: center;

    img {
      height: 100%;
    }

    figcaption {
      margin-left: 1em;
    }
  }
`;
export default SSearchOne;
