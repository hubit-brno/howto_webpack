import { SELECT_DETAIL } from './actionTypes.es6';

export function selectDetail(id) {
	return {
		type: SELECT_DETAIL,
		id
	}
}
