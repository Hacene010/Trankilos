import styled from 'styled-components';

const SHeader = styled.div`
  height: 30vh;

  section {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    img {
      height: 20vh;
    }
  }
  .auth {
    input {
      font-family: 'Playfair Display', serif;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      background-color: #fc4f4f;
      color: #f2f2f2;
      padding: 5px;
      margin: 80px 30px 0px 0px;
    }
  }

  h1 {
    text-align: center;
    margin: 0.2rem 0 0 -10rem;

    span {
      margin-left: 25rem;
    }

    img {
      width: 30px;
      margin: 2px;
      padding: 5px 0px 0px 5px;
    }
    @media (max-width: 720px) {
      margin: 0;

      span {
        margin-left: 0;
      }
    }
  }
`;
export default SHeader;
