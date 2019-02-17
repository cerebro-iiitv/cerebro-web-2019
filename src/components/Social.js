import React from 'react';

import Facebook from '../img/facebook.svg';
import Instagram from '../img/instagram.svg';
import Twitter from '../img/twitter.svg';

const Social = () => (
	<div id="social-icons" className="social-icons">
		<a href="https://facebook.com/cerebro.iiitv" target="_blank" rel="noopener noreferrer">
			<img src={Facebook} alt="Facebook Logo" className="social-icons__icon" />
		</a>
		<a href="https://instagram.com/cerebro.iiitv/" target="_blank" rel="noopener noreferrer">
			<img src={Instagram} alt="Instagram Logo" className="social-icons__icon" />
		</a>
		<a href="https://twitter.com/cerebro_iiitv" target="_blank" rel="noopener noreferrer">
			<img src={Twitter} alt="Twitter Logo" className="social-icons__icon" />
		</a>
	</div>
);

export default Social;
