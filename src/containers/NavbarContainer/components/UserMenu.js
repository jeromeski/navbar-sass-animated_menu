import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import sprites from '../../../assets/img/sprites.svg';
import * as actions from '../meta/actions';

const UserMenu = ({ isBarsSelected, dispatch, isUserMenuActive }) => {
	const onUserMenuClick = () => {
		if (isBarsSelected) {
			dispatch(actions.toggleMenus(false));
			dispatch(actions.toggleBars(true));
		}
		dispatch(actions.toggleUserMenu(!isUserMenuActive));
	};

	console.count('UserMenu');
	console.log('Are we in Bars? :', isBarsSelected);
	console.log('IsUserMenu showing? :', isUserMenuActive);
	return (
		<button className='navbar__user' onClick={onUserMenuClick}>
			<svg className='navbar__user-icon'>
				<use xlinkHref={`${sprites}#icon-user-circle`}></use>
			</svg>
		</button>
	);
};

const mapStateToProps = ({ navState: { isBarsSelected, isUserMenuActive } }) => {
	return {
		isBarsSelected,
		isUserMenuActive
	};
};

export default connect(mapStateToProps)(UserMenu);
