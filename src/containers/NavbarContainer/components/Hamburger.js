/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { TimelineMax, Power4 } from 'gsap';
import * as actions from '../meta/actions';
import { connect } from 'react-redux';

const initBarsAnimation = (isBarsShown, timeline, topLine, middleLine, bottomLine) => {
	if (!isBarsShown) {
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
};

const Hamburger = ({ isBarsSelected, dispatch, isBarsShown }) => {
	const timeline = new TimelineMax({ pause: true });
	const topLine = useRef(null);
	const middleLine = useRef(null);
	const bottomLine = useRef(null);
	let buttonEl = useRef(null);

	// initialize toggle animation
	useEffect(() => {
		initBarsAnimation(isBarsShown, timeline, topLine, middleLine, bottomLine);
	});

	// toggle isBars state
	const onHamburgerClick = () => {
		if (!isBarsSelected) {
			dispatch(actions.toggleUserMenu(false));
			dispatch(actions.toggleMenus(true));
		}
		dispatch(actions.toggleBars(!isBarsShown));
	};

	console.log('isBarsSelected ? :', isBarsSelected);
	console.log('isBarsShown ? :', isBarsShown);

	return (
		<button className='navbar__menu-btn' onClick={onHamburgerClick} ref={buttonEl}>
			<svg
				version='1.1'
				className='navbar__menu'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				x='0px'
				y='0px'
				width='24px'
				height='28px'
				viewBox='0 0 24 28'>
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
		</button>
	);
};

const mapStateToProps = ({ navState: { isBarsSelected, isBarsShown } }) => {
	return {
		isBarsSelected,
		isBarsShown
	};
};

export default connect(mapStateToProps)(Hamburger);
