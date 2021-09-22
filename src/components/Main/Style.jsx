import styled from 'styled-components';

const SMain = styled.div`
  width: 95vw;
  margin: auto;
  font-family: 'Filson Soft';
  font-weight: 600;

  .dishes {
    background-color: #ffff;
    width: 80%;
    margin: auto;
    padding: 5vh;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 20vw;
        margin: 10px;
        -webkit-box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.86);
        box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.86);
        border-radius: 5px;
      }
    }

    article:hover {
      h3 {
        margin-top: -15vh;
        font-size: 2rem;
        transition: all 0.5s ease-out;
        color: #f2f2f2;
      }
    }
  }

  hr {
    margin: 5vh auto;
    width: 90vw;
  }

  .desc {
    margin-top: 8vh;
    text-align: center;

    p {
      width: 70vw;
      margin: auto;
      padding: 2vh;
    }
  }
`;
export default SMain;
