import React from 'react';
import EventsList from '../components/EventsList';
import Logo from '../img/anshumanvisallstackdeveloper.png';
import ParticlesBg from './ParticlesBg'

const HomePage = () => (
	<main className="homepage">
		<div className="homepage__logo-wrapper">
			<ParticlesBg id='particles-bg' />
			<img src={Logo} alt="Logo" className="homepage__logo" />
		</div>
		<EventsList />
	</main>
);

export default HomePage;
