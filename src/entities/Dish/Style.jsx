import styled from 'styled-components';

const SDish = styled.div`
  article {
    width: 30vw;
    display: flex;
    padding: 1.3rem;
  }

  .title_img {
    width: 20rem;
    height: 15rem;
    position: relative;
    margin: 1.2rem;
  }

  .mealName {
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000;
    text-decoration: underline;
  }

  img {
    width: 100%;
    height: 100%;
    box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.86);
    border-radius: 5px;
  }

  .title_img:hover {
    img {
      transition: 0.3s;
      opacity: 0.4;
    }

    .mealName {
      display: flex;
      z-index: 10;
    }
  }

  .infos {
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .difficulties,
    .timer {
      display: flex;
      align-items: center;
    }

    img {
      box-shadow: none;
      width: 70px;
      height: 35px;
    }
    p {
      margin: 0.5rem;
      font-weight: bolder;
    }
    span {
      font-weight: 200;
    }
  }

  @media screen and (max-width: 600px) {
    .infos {
      display: none;
    }

    .title_img {
      img {
        width: 100%;
      }
    }

    article {
      padding: 0;
      width: 100%;
    }

    .title_img {
      margin: 1rem;
    }
  }
`;
export default SDish;
