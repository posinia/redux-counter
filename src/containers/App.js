import React, {Component} from 'react';
import Buttons from '../components/Button';
import CounterListContainer from './CounterListContainer';
import getRandomColor from '../lib/getRandomColor';

import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		const {onCreate, onRemove} = this.props;
		return (
			<div className="App">
				<Buttons onCreate={onCreate} onRemove={onRemove}/>
				<CounterListContainer/>
			</div>
		);
	}
}


//액션 생성함수준비
const mapToDispatch = (dispatch) => ({
	onCreate: () => dispatch(actions.create(getRandomColor())),
	onRemove: () => dispatch(actions.remove())
});

//리덕스에 연결시키고 내보내기
export default connect(null, mapToDispatch)(App);
