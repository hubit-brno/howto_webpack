import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer.es6';

import Master from './master/master.es6';
import Detail from './detail/detail.es6';

let store = createStore(reducer);

ReactDOM.render(
	<Provider store={ store }>
		<div>
			<Master />
			<Detail />
		</div>
	</Provider>,
	document.getElementById('app')
);

module.hot.accept();
