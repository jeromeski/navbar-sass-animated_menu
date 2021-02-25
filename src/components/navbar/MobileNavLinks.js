/* eslint-disable react-hooks/exhaustive-deps */
import { TimelineMax, Power4 } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MobileNavLinks = (props) => {
	const { isOpen } = props;
	const [menuOpen, setMenuOpen] = useState(null);

	const timeline = new TimelineMax({ pause: true });
	const mobile = useRef(null);

	const showMobileLinks = () => {
		timeline
			.set(mobile.current, { height: 0, opacity: '0' })
			.to(mobile.current, 1, { height: 'auto', opacity: 1, ease: Power4.easeOut }, 0.1)
			.play();
		return timeline;
	};

	const hideMobileLinks = () => {
		timeline
			.set(mobile.current, { height: 'auto', opacity: 1, ease: Power4.easeInOut })
			.to(mobile.current, 0.5, { height: 0, opacity: 0, ease: Power4.easeOut }, 0.1)
			.play();
		return timeline;
	};

	useEffect(() => {
		if (isOpen) {
			showMobileLinks();
		} else {
			hideMobileLinks();
		}
	}, [timeline, menuOpen, showMobileLinks, hideMobileLinks]);

	return (
		<ul ref={mobile} className='navbar__mobile'>
			<li className='navbar__mobile-item'>
				<Link to='/'>Home</Link>
			</li>
			<li className='navbar__mobile-item'>
				<Link to='/login'>Login</Link>
			</li>
			<li className='navbar__mobile-item'>
				<Link to='/register'>Register</Link>
			</li>
		</ul>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		isOpen: state.isOpen
	};
};

export default connect(mapStateToProps)(MobileNavLinks);
