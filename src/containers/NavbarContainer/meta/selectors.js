import { initialState } from './reducer';
/**
 * Get Navbar
 * @param state
 * @returns {Object}
 */
export const selectIsOpen = (state) => state.isOpen || initialState;
