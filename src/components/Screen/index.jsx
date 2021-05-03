import styled from 'styled-components';
import PropTypes from 'prop-types';

const SScreen = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #0008;
`;

function Screen({ onClick }) {
  return <SScreen onClick={onClick} />;
}
Screen.propTypes = {
  onClick: PropTypes.func,
};
Screen.defaultProps = {
  onClick: null,
};

export default Screen;
