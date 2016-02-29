import objectAssign from 'object-assign';
import { combineReducers } from 'redux';

import { SELECT_DETAIL } from './actionTypes.es6';

const initialState = {
	selectedId: 1,
	items: [
		{
			id: 1,
			title: 'First beer',
			desc: 'Why this is a really magnificent example of a delightful flavor'
		},
		{
			id: 2,
			title: 'Sec-ond bear',
			desc: 'Yeah, good stuff, bring me more'
		},
		{
			id: 3,
			title: 'Thheardd boaar',
			desc: 'Blurp, watz dissz be- beaar?!1'
		}
	]
};

const beerReducer = (state = initialState, action) => {

	switch (action.type) {

		case SELECT_DETAIL:
			return Object.assign({}, state, { selectedId: action.id });

		default:
			return state;

	}

}

export default combineReducers({
	beer: beerReducer
});
