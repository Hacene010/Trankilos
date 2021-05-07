import styled from 'styled-components';

const SApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
  font-family: 'Ubuntu', sans-serif;

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
