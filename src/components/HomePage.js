import React from 'react';
import EventsList from '../components/EventsList';
import Logo from '../img/anshumanvisallstackdeveloper.png';

const HomePage = () => (
	<main className="homepage">
		<div className="homepage__logo-wrapper">
			<img src={Logo} alt="Logo" className="homepage__logo" />
		</div>
		<EventsList />
	</main>
);

export default HomePage;
