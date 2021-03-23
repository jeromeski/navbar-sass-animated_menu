/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../../../assets/img/homey-logo-white.png';
import sprites from '../../../assets/img/sprites.svg';
import { DeviceSize } from '../meta/service';
import MobileNavLinks from './MobileNavLinks';
import DeskNavLinks from './DeskNavLinks';
import Hamburger from './Hamburger';
import UserMenu from './UserMenu';
import MobileUserLinks from './MobileUserLinks';
import { connect } from 'react-redux';

const Navbar = ({ isBarsSelected }) => {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

	console.count('Navbar Rendered');

	return (
		<div className='navbar'>
			<div className='navbar__container'>
				{isMobile && <Hamburger />}
				<div className='navbar__logo'>
					<img src={logo} alt='Logo' />
				</div>
				<div className='navbar__search'>
					<input className='navbar__search-input' type='search' placeholder='Search here...' />
					<button className='navbar__search-button'>
						<svg className='navbar__search-icon'>
							<use xlinkHref={`${sprites}#icon-search`}></use>
						</svg>
					</button>
				</div>
				{!isMobile && <DeskNavLinks />}
				{isMobile && <UserMenu />}
			</div>
			{isMobile && isBarsSelected && <MobileNavLinks />}
			{isMobile && !isBarsSelected && <MobileUserLinks />}
		</div>
	);
};

const mapStateToProps = ({ navState: { isBarsSelected } }) => {
	return {
		isBarsSelected
	};
};

export default connect(mapStateToProps)(Navbar);
