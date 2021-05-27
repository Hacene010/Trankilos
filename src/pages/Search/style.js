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

    ul {
      width: 100%;

      li {
        height: 3em;
      }

      figure {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        img {
          height: 3em;
          width: 3em;
        }

        figcaption {
          margin-left: 1em;
        }
      }
    }
  }
`;
export default SSearch;
