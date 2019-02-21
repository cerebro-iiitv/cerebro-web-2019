import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="footer-container">
				<div className="footer">
					<div className="institute-logo">
						<img src={require('../img/institute-logo.svg')} height='100px' />
						<span>Indian Institute of Information Technology, Vadodara</span>
					</div>
					<div className="links">
						<h2 className="footer-header"><u className="footer-border">Links</u></h2>
						<div className="footer-item"><a className="footer-link" href="/">Home</a></div>
						<div className="footer-item"><a className="footer-link" target="_blank" rel="noopener noreferrer" href="http://iiitv.ac.in">Institute Site</a></div>
						<div className="footer-item"><a className="footer-link" href="/about">About</a></div>
						<div className="footer-item"><a className="footer-link" href="/timeline">Timeline</a></div>
					</div>
					<div className="contact">
						<h2 className="footer-header"><u className="footer-border">Contact</u></h2>
						<div className="footer-item"><span className="header-color">Email: </span><a className="footer-link" href="mailto:cerebro@iiitv.ac.in">cerebro@iiitv.ac.in</a></div>
						<div className="footer-item"><span className="header-color">Phone: </span><a className="footer-link" href="tel:+91-9370645038">+91-9370645038</a></div>
						<div className="footer-item"><span className="header-color">Address: </span> <a className="footer-link" href="https://goo.gl/maps/7g5D6XJpMAD2">c/o Block No.9, Government Engineering College, Sector-28, Gandhinagar, Gujarat - 382028</a></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
