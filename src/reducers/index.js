import { combineReducers, createStore } from 'redux';
import { IS_OPEN } from '../actions/types';

const INIT_STATE = null;

const menuToggleReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case IS_OPEN:
			return action.payload;
		default:
			return state;
	}
};

export const init = () => {
	const mainReducer = combineReducers({ isOpen: menuToggleReducer });

	const store = createStore(mainReducer);
	return store;
};
