import React from 'react';
import { NavLink } from 'react-router-dom';
import sprites from '../../../assets/img/sprites.svg';

const DeskNavlinks = () => {
  console.count('Desktop')
	return (
		<div className='navbar__user-area'>
			<ul className='navbar__links-wrap'>
				<li className='navbar__links-item'>
					<NavLink exact activeClassName='active' to='/'>
						Home
					</NavLink>
				</li>
			</ul>
			<ul className='navbar__auth-wrap'>
				<li className='navbar__auth-item'>
					<NavLink exact activeClassName='active' to='/login'>
						Login
					</NavLink>
				</li>
				<li>
					<svg className='navbar__auth-icon'>
						<use xlinkHref={`${sprites}#icon-circle-thin`}></use>
					</svg>
				</li>
				<li className='navbar__auth-item'>
					<NavLink exact activeClassName='active' to='/register'>
						Register
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default DeskNavlinks;
