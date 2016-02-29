import React from 'react';
import ReactDOM from 'react-dom';

import Master from './master/master.es6';
import Detail from './detail/detail.es6';

ReactDOM.render(
	<div>
		<Master />
		<Detail />
	</div>,
	document.getElementById('app')
);

module.hot.accept();
