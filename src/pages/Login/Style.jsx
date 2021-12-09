import styled from 'styled-components';

const SLogin = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85vw;
    margin: 2rem auto;
    background-color: #ffff;

    .signUp,
    .login {
      display: flex;
      flex-direction: column;
      width: 40vw;
      text-align: justify;
    }

    .checkbox {
      align-self: center;
      flex-direction: row;
      align-items: center;

      input {
        box-shadow: none;
      }
    }

    label {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
    }

    input {
      padding: 5px;
      margin: 10px;
      height: 25px;
      border-radius: 5px;
      border: none;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .signUpBtn {
      cursor: pointer;
      width: 5rem;
    }
  }

  @media screen and (max-width: 600px) {
  }
`;
export default SLogin;
