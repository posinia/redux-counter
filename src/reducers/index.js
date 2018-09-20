import * as types from '../actions/ActionTypes';

//초기 상태 정의
const initialState = {
	counters: [{
		color: 'black',
		number: 0
	}]
};


function counter(state = initialState, action) {
	//래퍼런스 생성
	const { counters } = state;
	console.log("action type::", action.type);
	switch (action.type) {
		case types.CREATE:
			return {
				counters: [
					...counters,
					{
						color: action.color,
						number: 0
					}
				]
			};
		case types.REMOVE:
			return {
				counters: counters.slice(0, counters.length - 1)
			};
		case types.INCREMENT:
			//console.log({...counters[action.index],number: counters[action.index].number + 1});
			return {
				counters: [
					...counters.slice(0, action.index),
					{
						...counters[action.index], //기존 객체에
						number: counters[action.index].number + 1 // 새 number 값 덮어쓰기
					},
					...counters.slice(action.index +1, counters.length)//선택한 인덱스의 다음 아이템들
				]
			};
		case types.DECREMENT:
			return {
				counters: [
					...counters.slice(0, action.index),
					{
						...counters[action.index], //기존 객체에
						number: counters[action.index].number - 1 // 새 number 값 덮어쓰기
					},
					...counters.slice(action.index +1, counters.length)//선택한 인덱스의 다음 아이템들
				]
			};
		case types.SET_COLOR:
			//console.log({...counters[action.index],number: counters[action.index].number + 1});
			return {
				counters: [
					...counters.slice(0, action.index),
					{
						...counters[action.index], //기존 객체에
						color: action.color
					},
					...counters.slice(action.index +1, counters.length)//선택한 인덱스의 다음 아이템들
				]
			};
		default:
			return state;
	}
}



export default counter;