import React from 'react';
import EventsList from '../components/EventsList';
import Logo from '../img/anshumanvisallstackdeveloper.png';
import ParticlesBg from './ParticlesBg'

const scrollDown = () => {
	window.scrollTo({
		top: 780,
		left: 0,
		behavior: 'smooth'
	});
}

const HomePage = () => (
	<main className="homepage">
		<div className="homepage__logo-wrapper">
			<ParticlesBg id='particles-bg' />
			<img src={Logo} alt="Logo" className="homepage__logo" />
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
