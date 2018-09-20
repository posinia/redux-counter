import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

//리덕스 관련 불러오기
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

//스토어 생성
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

// <Provider store={store}><App/></Provider> 연동할 최상위 컴포넌트를 감쌈

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

