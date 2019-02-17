import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="footer-container">
				<div className="footer">
					<div className="links">
						<h2 className="footer-header">Links</h2>
						<div className="footer-item"><a href="/">Home</a></div>
						<div className="footer-item"><a href="https://iiitv.ac.in">Institute Site</a></div>
						<div className="footer-item"><a href="/about">About</a></div>
					</div>
					<div className="contact">
						<h2 className="footer-header">Contact</h2>
						<div className="footer-item"><span className="header-color">Email: </span><a href="mailto:cerebro@iiitv.ac.in">cerebro@iiitv.ac.in</a></div>
						<div className="footer-item"><span className="header-color">Phone: </span><a href="tel:+91-9370645038">+91-9370645038</a></div>
						<div className="footer-item"><span className="header-color">Address: </span> <a href="https://goo.gl/maps/7g5D6XJpMAD2">c/o Block No.9, Government Engineering College, Sector-28, Gandhinagar, Gujarat - 382028</a></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
