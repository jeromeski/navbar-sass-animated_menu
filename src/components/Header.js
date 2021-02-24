import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/homey-logo-white.png';
import sprites from '../assets/img/sprites.svg';

const Header = () => {
	return (
		<div className='navbar'>
			<div className='navbar__container'>
				<div className='navbar__logo'>
					<img src={logo} alt='Logo' />
				</div>
				<div className='navbar__search'>
					<input
						classname='navbar__search-input'
						type='search'
						placeholder='What are you looking for?'
					/>
					<button className='navbar__search-button'>
						<svg className='navbar__search-icon'>
							<use xlinkHref={`${sprites}#icon-search`}></use>
						</svg>
					</button>
				</div>
				<ul className='navbar__links-wrap'>
					<li className='navbar__links-item'>
						<Link to='/'>Home</Link>
					</li>
				</ul>
				<ul className='navbar__auth-wrap'>
					<li className='navbar__auth-item'>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<svg className='navbar__auth-icon'>
							<use xlinkHref={`${sprites}#icon-circle-thin`}></use>
						</svg>
					</li>
					<li className='navbar__auth-item'>
						<Link to='/register'>Register</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
