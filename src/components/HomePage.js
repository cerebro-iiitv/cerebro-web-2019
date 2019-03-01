import React from 'react';
import EventsList from '../components/EventsList';
import Logo from '../img/anshumanvisallstackdeveloper.png';
import CountDown from 'reactjs-countdown';

const scrollDown = () => {
	window.scrollTo({
		top: window.innerHeight - 70,
		left: 0,
		behavior: 'smooth'
	});
}

const HomePage = () => (
	<main className="homepage">
		<div className="homepage__logo-wrapper">
			<img src={Logo} alt="Logo" className="homepage__logo" />
		</div>
		<div className="start-text">
			<h1 className="start-heading">Starts in</h1>
		</div>
		<div className="countdown">
			<CountDown deadline="Sat, 02 Mar 2019 14:00:00 GMT"/>
		</div>
        <div className="scrollButton" onClick = {scrollDown}>
        	<span className = "scrollLink">
				<img alt="Arrow Down Icon" src="https://www.solodev.com/assets/anchor/arrow-down.png"/>
			</span>
		</div>
		<EventsList />
	</main>
);

export default HomePage;
