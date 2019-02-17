import React from 'react';
import EventsList from '../components/EventsList';
import Logo from '../img/aashutoshrathiallstackdeveloper.png';
import Footer from './Footer.js';

const HomePage = () => (
	<main className="homepage">
		<div className="homepage__logo-wrapper">
			<img src={Logo} alt="Logo" className="homepage__logo" />
		</div>
		<EventsList />
		<Footer />
	</main>
);

export default HomePage;
