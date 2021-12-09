import styled from 'styled-components';

const SFooter = styled.div`
  margin-top: 10vh;
  background-color: #cccaca;
  box-shadow: 0px -8px 16px 1px #cccacac8;

  .container {
    display: flex;
    justify-content: space-around;
  }

  h3 {
    margin: 10px;
    text-align: center;
  }

  form {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .contactInfos {
      display: flex;
    }

    input {
      padding: 5px;
      width: 11vw;
      margin: 10px;
      height: 25px;
      border-radius: 5px;
      border: none;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    textarea {
      border-radius: 5px;
      border: none;
      height: 7vh;
      width: 24vw;
      padding: 5px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .sendBtn {
      cursor: pointer;
      width: 5rem;
    }
  }

  .infos {
    display: flex;
    align-self: center;
    margin: 15px;

    img {
      height: 5vh;
      margin: 10px;
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
    }
  }

  .navigation {
    height: 5vh;
    background-color: #474747;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .navbar {
      display: flex;
      justify-content: space-around;
      height: inherit;
    }

    .home,
    .dishes {
      border-right: 3px #cccaca solid;
      padding: 0 30px 0 20px;
      height: inherit;
      display: flex;
      align-items: center;

      h3 {
        color: #cccaca;
        margin: 5px;
      }

      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 400px) {
    h3 {
      font-size: 1.1rem;
    }
    .container {
      width: 95vw;
      margin: auto;

      input,
      textarea {
        width: 85vw;
      }

      .sendBtn {
        width: 50%;
        align-self: center;
      }
    }

    .navbar {
      display: none;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
`;
export default SFooter;
