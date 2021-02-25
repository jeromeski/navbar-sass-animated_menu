import React from 'react';
import { Link } from 'react-router-dom';
import sprites from '../../assets/img/sprites.svg';

const Navlinks = () => {
	return (
		<div className='navbar__user-area'>
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
	);
};

export default Navlinks;
