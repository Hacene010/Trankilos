import styled from 'styled-components';

const SMenus = styled.div`
  .container {
    display: grid;
    grid-template-columns: 0.3fr 1fr 1fr;
    grid-template-rows: 0.3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    grid-template-areas:
      ' h3 h3'
      'Lundi dish .'
      '. . .'
      '. . .'
      '. . .'
      '. . .'
      '. . .'
      '. . .';
  }

  .container > h3 {
    grid-area: h3;
  }
`;
export default SMenus;
