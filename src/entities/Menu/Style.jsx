import styled from 'styled-components';

const SMenus = styled.div`
  .mobile__version {
    display: none;
  }

  table {
    max-width: 80vw;
    background-color: #fff;
    border: #cccaca 1.5px solid;
  }

  .diner {
    display: flex;
    justify-content: space-around;
    background-color: #cccacac8;

    th {
      background-color: transparent;
      border: transparent;
    }
  }

  .row {
    display: flex;
    td {
      border: #cccaca 1.5px solid;
    }
  }

  th {
    border: #cccaca 1.5px solid;
    padding: 0.6rem;
    color: #1a1919;
    background-color: #cccacac8;
  }

  .day {
    vertical-align: middle;
    padding: 0.2em;
  }

  @media screen and (max-width: 600px) {
    .mobile__version {
      display: block;
    }
    .descktop__version {
      display: none;
    }

    table {
      max-width: 95vw;
      margin: 0.3rem auto;
      background-color: #fff;
    }

    .day {
      padding: 0.7rem;
      vertical-align: middle;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }

    .dishes {
      width: 70vw;
      display: flex;
      flex-direction: column;
    }

    td {
      padding: 0.5rem;
      border: #cccaca 1.5px solid;
    }
  }
`;
export default SMenus;
