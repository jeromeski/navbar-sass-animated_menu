/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { TimelineMax, Power4 } from 'gsap';
import { connect } from 'react-redux';
import * as action from '../../actions';

const MenuToggle = (props) => {
	const [menuOpen, setMenuOpen] = useState(null);
	const timeline = new TimelineMax({ pause: true });
	const topLine = useRef(null);
	const middleLine = useRef(null);
	const bottomLine = useRef(null);

	const handleToggleMenu = () => {
		if (menuOpen) {
			props.dispatch(action.toggleMenu(false));
			setMenuOpen(false);
		} else {
			props.dispatch(action.toggleMenu(true));
			setMenuOpen(true);
		}
	};

	useEffect(() => {
		if (menuOpen) {
			timeline
				.to(middleLine.current, 0.1, { opacity: 0, ease: Power4.easeOut }, 0.2)
				.to(topLine.current, 0.1, { rotation: 225, y: -7, transformOrigin: '50% 50%' }, 0.2)
				.to(
					bottomLine.current,
					0.1,
					{
						y: 9,
						rotation: -225,
						transformOrigin: '50% 50%'
					},
					0.2
				)
				.play();
		} else {
			timeline
				.to(topLine.current, 0.1, { rotation: 0, y: 0, transformOrigin: '50% 50%' }, 0.2)
				.to(
					bottomLine.current,
					0.1,
					{
						y: 0,
						rotation: 0,
						transformOrigin: '50% 50%'
					},
					0.2
				)
				.to(middleLine.current, 0, { opacity: 1, ease: Power4.easeIn }, 0.3)
				.play();
		}
	}, [menuOpen, timeline]);

	return (
		<div>
			<svg
				version='1.1'
				className='navbar__menu'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				x='0px'
				y='0px'
				width='24px'
				height='28px'
				viewBox='0 0 24 28'
				onClick={() => handleToggleMenu()}>
				<g ref={topLine}>
					<path d='M24,21v2c0,0.547-0.453,1-1,1H1c-0.547,0-1-0.453-1-1v-2c0-0.547,0.453-1,1-1h22C23.547,20,24,20.453,24,21z' />
				</g>
				<g ref={middleLine}>
					<path d='M24,13v2c0,0.547-0.453,1-1,1H1c-0.547,0-1-0.453-1-1v-2c0-0.547,0.453-1,1-1h22C23.547,12,24,12.453,24,13z' />
				</g>
				<g ref={bottomLine}>
					<path d='M24,5v2c0,0.547-0.453,1-1,1H1C0.453,8,0,7.547,0,7V5c0-0.547,0.453-1,1-1h22C23.547,4,24,4.453,24,5z' />
				</g>
			</svg>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isOpen: state.isOpen
	};
};

export default connect(mapStateToProps)(MenuToggle);
