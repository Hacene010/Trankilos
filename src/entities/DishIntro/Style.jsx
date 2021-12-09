import styled from 'styled-components';

const SDishIntro = styled.div`
  margin-bottom: 10vh;

  .container {
    width: 85vw;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #fff;

    article {
      width: 15vw;
      padding: 1.3rem;

      img,
      h2 {
        width: 100%;
        height: 100%;
      }

      img {
        box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.86);
        border-radius: 5px;
      }

      .title_img {
        position: relative;
      }

      h2 {
        position: absolute;
        display: none;
        font-weight: 600;
        color: #000;
        text-decoration: underline;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .title_img:hover {
        img {
          transition: 0.3s;
          opacity: 0.4;
        }

        h2 {
          display: flex;
          z-index: 10;
        }
      }
    }
  }

  hr {
    width: 80vw;
    margin: 5vh auto;
  }
`;
export default SDishIntro;
