import styled from 'styled-components';

const SDish = styled.div`
  display: flex;
  background-color: gray;
  padding: 15px;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: #f2f2f2 solid 1px;
    width: 25vw;

    h3 {
      text-align: center;
      margin: 10px;
    }

    figure {
      img {
        width: 15vw;
      }
    }

    p {
      width: 100%;
    }
  }
`;
export default SDish;
