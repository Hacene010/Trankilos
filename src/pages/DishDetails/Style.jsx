import styled from 'styled-components';

const SDishDetails = styled.div`
  article {
    width: 80vw;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #ffff;
  }

  .title_img {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    img {
      width: 20rem;
      height: 15rem;
      box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.86);
      border-radius: 5px;
      margin: 1.2rem auto;
    }

    h2 {
      font-weight: 600;
    }

    .categoryArea {
      align-self: flex-start;

      h3 {
        padding: 0rem;
        text-align: left;
      }
    }
  }

  h3 {
    padding: 0.2rem;
    margin: 0.3rem;

    span {
      font-weight: 500;
      padding: 0%.2rem;
    }
  }

  li {
    margin-left: 2rem;
  }

  .description {
    align-self: flex-start;
    justify-self: center;
    text-align: center;
    margin: auto;
    width: 50%;
    margin-top: 2.6rem;
    padding: 0.3rem;

    p {
      white-space: pre-line;
      align-self: flex-start;
      margin: 0.5rem;
      padding: 0.2rem;
      text-align: center;
    }
  }

  .infos {
    padding: 1rem;
    display: flex;
    align-items: center;
    width: 100%;

    .difficulties,
    .timer {
      display: flex;
      align-items: center;
      height: 35px;
      padding: 0.2rem;
    }

    img {
      box-shadow: none;
      width: 60px;
      height: 35px;
    }

    span {
      font-size: 0.9rem;
      font-weight: 200;
    }
  }

  @media screen and (max-width: 600px) {
    article {
      flex-direction: column;
      padding: 0;

      p {
        margin: auto;
      }
    }
    .description {
      width: 100%;
    }

    .title_img {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .infos {
      flex-direction: column;

      h3 {
      }
      span {
        font-size: 0.9rem;
        font-weight: 200;
      }
    }
  }
`;
export default SDishDetails;
