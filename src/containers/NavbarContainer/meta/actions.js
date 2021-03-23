import * as constants from './constants';

export const toggleMenus = (value) => {
	return {
		type: constants.IS_BARS_SELECTED,
		payload: value
	};
};

export const toggleBars = (value) => {
	return {
		type: constants.IS_BARS_SHOWN,
		payload: value
	};
};

export const toggleUserMenu = (value) => {
	return {
		type: constants.IS_USER_MENU_ACTIVE,
		payload: value
	};
};
