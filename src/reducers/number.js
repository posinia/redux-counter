import * as types from '../actions/ActionTypes';

const initialState = {
	number: 0
};

const number = (state = initialState, action) => {
	console.log(state, action);
	switch (action.type) {
		case types.INCREMENT:
			return {
				number: state.number + 1
			};
		case types.DECREMENT:
			return {
				number: state.number - 1
			};
		default:
			return state;

	}
};

export default number;