import { combineReducers } from 'redux';
import navbarReducer from '../containers/NavbarContainer/meta/reducer';

export default combineReducers({
	navState: navbarReducer
});
