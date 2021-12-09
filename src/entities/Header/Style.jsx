import styled from 'styled-components';

const SHeader = styled.div`
  margin-bottom: 5vh;
  section {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    img {
      height: 25vh;
    }
  }
  .auth {
    height: 12vh;
    margin: 4.7rem;
    display: flex;
    flex-direction: column;

    img {
      width: 120px;
      opacity: 0.5;
    }

    input {
      cursor: pointer;
      padding: 5px;
      margin: 10px;
      height: 25px;
      border-radius: 5px;
      border: none;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
  }

  .you {
    margin-right: 5px;
    font-style: italic;
    color: #fc4f4f;
  }

  h1 {
    text-align: center;
    .firstPart {
      margin-left: -20vw;
    }

    .secondPart {
      margin-right: -17vw;
    }

    img {
      width: 30px;
      margin: 2px;
      padding: 5px 0px 0px 5px;
    }
  }

  @media screen and (max-width: 500px) {
    section {
      margin-bottom: 8px;
      align-items: center;
    }

    .logo {
      img {
        height: 25vh;
      }
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
