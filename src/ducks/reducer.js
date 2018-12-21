import axios from 'axios';

const initialState = {
  username: '',
  profile_pic: '',
  user: {}
};

const SET_STATE = 'SET_STATE';
const UPDATE_USER = 'UPDATE_USER';
const GET_USER = 'GET_USER';

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE:
      return Object.assign({}, state, { individual: action.payload });
    case UPDATE_USER:
      return Object.assign({}, state, action.payload);
    case GET_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function setUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/user').then(response => {
      return response.data;
    })
  };
}

export function setState(individual) {
  return {
    type: SET_STATE,
    payload: individual
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export default reducer;
