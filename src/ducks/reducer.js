const axios = require('axios');


const initialState = {
	username: '',
	password: '',
	user: {}
};

const GET_USER = 'GET_USER';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

function reducer(state = initialState, action) {
	switch (action.type) {
		case `${GET_USER}_FULFILLED`:
			return { ...state, user: action.payload };
		case `${UPDATE_USERNAME}_FULFILLED`:
			return { ...state, username: action.payload };
		case `${UPDATE_PASSWORD}_FULFILLED`:
			return { ...state, password: action.payload };
		default:
			return state;
	}
}

export const update_username = username => {
	return {
	  type: UPDATE_USERNAME,
	  payload: username
	};
  };
  
  export const update_password = password => {
	return {
	  type: UPDATE_PASSWORD,
	  payload: password
	};
  };

export const get_user = (username, password) => {
	return {
	  type: GET_USER,
	  payload: axios.post('/api/user', {username, password})
	};
  };

export default reducer;
