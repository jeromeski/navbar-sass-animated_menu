import * as constants from './constants';

export const initialState = {
	isBarsSelected: true,
	navlinksData: [
		{ id: 1, name: 'Home', path: '/' },
		{ id: 2, name: 'Listing', path: '/listing' },
		{ id: 3, name: 'FAQ', path: '/faq' },
		{ id: 4, name: 'Contact', path: '/contact' }
	],
	userlinksData: [
		{ id: 1, name: 'Login', path: '/login' },
		{ id: 2, name: 'Register', path: '/register' }
	],
	isBarsShown: true,
	isUserMenuActive: false
};

const navbarReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.IS_BARS_SELECTED: {
			return {
				...state,
				isBarsSelected: action.payload
			};
		}
		case constants.IS_BARS_SHOWN: {
			return {
				...state,
				isBarsShown: action.payload
			};
		}
		case constants.IS_USER_MENU_ACTIVE: {
			return {
				...state,
				isUserMenuActive: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default navbarReducer;
