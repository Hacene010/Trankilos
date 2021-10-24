import styled from 'styled-components';

const SMenus = styled.div`
  .mobile__version {
    display: none;
  }

  table {
    width: 75vw;
    background-color: #fff;
    border: #f83333 1.5px solid;
  }

  tr,
  td,
  th {
    border: #f83333 1.5px solid;
    padding: 1.2rem;
  }

  .day {
    vertical-align: middle;
    padding: 0.2em;
  }

  th {
    background-color: #fc4f4fdf;
    color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    .mobile__version {
      display: block;
    }
    .descktop__version {
      display: none;
    }

    table {
      width: 95vw;
      margin: 0.3rem auto;
      background-color: #fff;
    }

    .day {
      vertical-align: middle;

      aside {
        padding: 0.5rem;
      }
    }

    td {
      padding: 0.5rem;
    }

    td > tr {
      border: 0;
    }
  }
`;
export default SMenus;
