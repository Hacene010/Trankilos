/* eslint-disable indent */

const isLoggedReducer = (status = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return true;
    case 'LOGOUT':
      return false;
    default:
      return status;
  }
};

export default isLoggedReducer;
