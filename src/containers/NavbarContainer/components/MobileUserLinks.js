/* eslint-disable react-hooks/exhaustive-deps */
import { TimelineMax, Elastic } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../meta/actions';

const MobileUserLinks = ({ userlinksData, isBarsSelected, isUserMenuActive, dispatch }) => {
	const timeline = new TimelineMax({ pause: true });
	const mobile = useRef(null);
	const mobileLink = useRef(null);

	const showMobileLinks = () => {
		timeline
			.to(mobile.current, 1, { height: 'auto', opacity: 1, ease: Elastic.easeOut }, 0.1)
			.to(mobileLink.current, 0.1, { opacity: 1 }, 0.1)
			.play();
		return timeline;
	};

	const hideMobileLinks = () => {
		timeline.to(mobile.current, 0.2, { height: 0, opacity: 0 }, 0.1).play();
		return timeline;
	};

	const handleCloseMenu = () => {
		dispatch(actions.toggleUserMenu(false));
	};

	useEffect(() => {
		if (isUserMenuActive) {
			showMobileLinks();
		} else {
			hideMobileLinks();
		}
	}, [isUserMenuActive]);

	console.count('MobileUserLinks rendered!');
	return (
		<nav>
			<ul ref={mobile} className='navbar__mobile'>
				{userlinksData.map((link) => (
					<li key={link.id} ref={mobileLink} className='navbar__mobile-item'>
						<NavLink exact activeClassName='active' to={link.path} onClick={handleCloseMenu}>
							{link.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

const mapStateToProps = ({ navState: { isBarsSelected, userlinksData, isUserMenuActive } }) => {
	return {
		isBarsSelected,
		userlinksData,
		isUserMenuActive
	};
};

export default connect(mapStateToProps)(MobileUserLinks);
