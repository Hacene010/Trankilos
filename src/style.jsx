import styled from 'styled-components';

const SApp = styled.div`
  background-color: #fff7f7;
  font-family: 'Playfair Display', serif;

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
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
