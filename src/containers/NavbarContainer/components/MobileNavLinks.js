/* eslint-disable react-hooks/exhaustive-deps */
import { TimelineMax, Elastic } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../meta/actions';

const MobileNavLinks = ({ navlinksData, isBarsShown, dispatch }) => {
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
		dispatch(actions.toggleBars(!isBarsShown));
		console.log('close clicked');
	};

	useEffect(() => {
		if (isBarsShown) {
			hideMobileLinks();
		} else {
			showMobileLinks();
		}
	}, [isBarsShown]);

	console.log('MobileNavLinks Component rendered');
	return (
		<nav>
			<ul ref={mobile} className='navbar__mobile'>
				{navlinksData.map((link) => (
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

const mapStateToProps = ({ navState: { isBarsShown, navlinksData } }) => {
	return {
		isBarsShown,
		navlinksData
	};
};

export default connect(mapStateToProps)(MobileNavLinks);
