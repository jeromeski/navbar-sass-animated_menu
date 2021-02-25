import { IS_OPEN } from './types';

export const toggleMenu = (value) => {
	return {
		type: IS_OPEN,
		payload: value
	};
};
