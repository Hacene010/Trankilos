import styled from 'styled-components';

const SDish = styled.div`
  article {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .title_img {
    position: relative;
    margin: 1.2rem;
  }

  h3 {
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;

    a {
      color: #000;
    }
  }

  img {
    width: 100%;
    width: 100%;
    box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.86);
    border-radius: 5px;
  }

  .title_img:hover {
    img {
      transition: 0.3s;
      opacity: 0.4;
    }

    h3 {
      display: flex;
      z-index: 10;
    }
  }

  @media screen and (max-width: 600px) {
    .description {
      display: none;
    }

    article {
      padding: 0;
    }

    .title_img {
      margin: 1rem;
    }
  }
`;
export default SDish;
