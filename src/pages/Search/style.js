import styled from 'styled-components';

const SSearch = styled.div`
  width: 250px;
  position: relative;

  & > * {
    width: 100%;
    box-sizing: border-box;
  }

  .searchResults {
    position: absolute;
    top: calc(1em + 4px);
    left: 0;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    line-height: 2em;

    ul {
      width: 100%;

      li:nth-of-type(2n + 1) {
        background-color: #eee;
      }
    }

    img {
      height: 100%;
    }

    figcaption {
      margin-left: 1em;
    }
  }
`;
export default SSearch;
