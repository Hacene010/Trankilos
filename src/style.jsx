import styled from 'styled-components';

const SApp = styled.div`
  background-color: #fff7f7;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.6rem;
  }

  th,
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 0.9rem;
    font-weight: 400;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;
export default SApp;
