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
    width: 100%;

    border: 1px solid lightgrey;
    background-color: white;
    display: flex;
    align-items: center;
    max-height: 60vh;
    overflow-y: scroll;

    ul {
      width: 100%;

      li:nth-of-type(2n) {
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
