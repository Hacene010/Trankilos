/* eslint-disable indent */
const initialState = {
  id: '',
  email: '',
  firstname: '',
  lastname: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.user };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
