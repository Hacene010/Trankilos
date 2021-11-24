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

    .categoryArea {
      align-self: flex-start;

      h3 {
        padding: 0rem;
        text-align: left;
      }
    }
  }

  h3 {
    padding: 0.5rem;
    margin: 0.5rem;
  }

  li {
    margin-left: 2rem;
  }

  .description {
    align-self: flex-start;
    justify-self: center;
    margin: auto;
    width: 50%;
    margin-top: 2.6rem;
    padding: 0.3rem;

    p {
      align-self: flex-start;
      margin: 0.5rem;
      padding: 0.2rem;
      text-align: center;
    }
  }

  .ingredients {
    margin-top: -6rem;
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

    .categoryArea {
      display: flex;
      align-items: center;
      width: 100%;
      h3 {
        color: #fc4f4f;
      }
    }
  }
`;
export default SDishDetails;
