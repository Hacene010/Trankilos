import styled from 'styled-components';

const SApp = styled.div`
  & .centerer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .gallery {
    display: flex;
    flex-flow: row wrap;
  }
`;
export default SApp;
