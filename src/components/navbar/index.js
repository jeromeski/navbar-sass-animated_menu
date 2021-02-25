/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/img/homey-logo-white.png';
import sprites from '../../assets/img/sprites.svg';
import { DeviceSize } from '../../responsive/index';
import MenuToggle from './MenuToggle';
import MobileNavLinks from './MobileNavLinks';
import Navlinks from './Navlinks';

const Navbar = () => {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	return (
		<div className='navbar'>
			<div className='navbar__container'>
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
				{!isMobile && <Navlinks />}
				{isMobile && <MenuToggle />}
			</div>
			{isMobile && <MobileNavLinks />}
		</div>
	);
};

export default Navbar;
