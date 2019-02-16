import React from 'react';

import Photo from '../img/college.jpg';

const About = () => (
	<div className="container">
		<main className="about">
			<div className="about__contact">
				<div className="about__contact-card">
					<img src={Photo} className="about__photo" />
					<h2 className="heading--secondary">IIIT Vadodara</h2>
					<p className="about__address">
						Address: <span>c/o Block No.9, Government Engineering College, Sector-28, Gandhinagar, Gujarat-382028</span>
					</p>
				</div>
			</div>
			<div className="about__info">
				<h1 className="heading--primary">About Us</h1>
				<p className="paragraph">
					<span className="paragraph__highlight">Indian Institution of Information Technology, Vadodara</span> (IIIT-V)
					is one of the newly formed IIIT by the Ministry of Human Resource Development (
					<span className="paragraph__highlight">MHRD</span>) , Government of India under Public Private Partnership
					(PPP) model. The partners in this project are Government of India, Government of Gujarat, Gujarat Energy
					Research and Management Institute, Gujarat State Fertilizers and Chemicals Ltd. and Tata Consultancy Services.
				</p>
				<p className="paragraph">
					<span className="paragraph__highlight">Cerebro</span> is the{' '}
					<span className="paragraph__highlight">Annual Technical Festival</span> of Indian Institute of Information
					Technology, Vadodara held in <span className="paragraph__highlight">March</span>. It is entirely organized by
					the <span className="paragraph__highlight">Technical Society of IIIT, Vadodara</span> and serves as a platform
					for technophiles to showcase their creativity and intelligence. The festival aims to bring together great
					minds through various activities like{' '}
					<span className="paragraph__highlight">Technical Workshops, events, talks</span> and{' '}
					<span className="paragraph__highlight">exhibitions</span>.
				</p>
			</div>
		</main>
	</div>
);

export default About;
