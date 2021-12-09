import styled from 'styled-components';

const SButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem auto;

  input {
    margin: auto 0.3rem;
    cursor: pointer;
    border: none;
    border-radius: 8px 8px 0px 0px;
    padding: 0.5rem;
    width: 30vw;
    background-color: #cccaca;
    color: #313131;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0px -3px 10px 1px #cccacac8;
  }

  .active input {
    background-color: #7a7878;
    color: #d8d7d7;
  }
`;
export default SButton;
