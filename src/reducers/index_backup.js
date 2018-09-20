import * as types from '../actions/ActionTypes';

//초기상태 정의
const initialState = {
	color: 'black',
	number: 0
};


/*리듀서 함수 정의 */
function counter(state = initialState, action) {
	console.log('counter', state, action);
	console.log(state.color)
	switch (action.type) {
		case types.INCREMENT:
			return {
				...state,
				number: state.number + 1
			};
		case types.DECREMENT:
			return {
				...state,
				number: state.number - 1
			};
		case types.SET_COLOR:
			return {
				...state,
				color: action.color
			};
		default:
			return state;
	}
}


export default counter;