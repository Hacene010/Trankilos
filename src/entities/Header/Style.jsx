import styled from 'styled-components';

const SHeader = styled.div`
  margin-bottom: 3vh;
  section {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    img {
      height: 35vh;
    }
  }
  .auth {
    input {
      font-family: 'Playfair Display', serif;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      background-color: #fc4f4f;
      color: #f2f2f2;
      padding: 8px;
      margin: 80px 30px 0px 0px;
    }
  }

  .catchPhrase {
    .secondPart {
      margin-left: 20vw;
    }

    .firstPart {
      margin-left: -15vw;
    }
  }

  .you {
    margin-right: 5px;
    font-style: italic;
    color: #fc4f4f;
  }

  h1 {
    text-align: center;

    img {
      width: 30px;
      margin: 2px;
      padding: 5px 0px 0px 5px;
    }
  }

  @media screen and (max-width: 500px) {
    section {
      flex-direction: column;
      align-items: center;
      margin-bottom: 8px;
    }
    .auth {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;

      input {
        margin: 5px;
        width: 80vw;
      }
    }
  }
`;
export default SHeader;
