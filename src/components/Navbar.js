import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { signOut } from '../actions/authActions';
import Modal from "react-responsive-modal";
import { loadAssets } from '../actions/assetsActions';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerOut: false,
			open: false
		};
	}

	onOpenModal = () => {
		this.setState({ open: true });
	};
	
	onCloseModal = () => {
		this.setState({ 
			open: false,
		 });
	};

	showDrawer = () => {
		this.setState({
			drawerOut: true
		});

		try {
			document.getElementById('user-profile-main').style.zIndex = -1;
			document.getElementById('social-icons').style.zIndex = -1;
		} catch {}
	};

	hideDrawer = () => {
		this.setState({
			drawerOut: false
		});
		try {
			document.getElementById('user-profile-main').style.zIndex = 0;
			document.getElementById('social-icons').style.zIndex = 2000;
		} catch {}
	};

	componentDidMount() {
		document.addEventListener('scroll', e => {
			let elem = document.getElementById('navbar-container')
			if (window.pageYOffset > 38) {
				if (!elem.classList.contains('scrolled')) {
					elem.classList.add('scrolled')
				}
			} else {
				elem.classList.remove('scrolled')
			}
		})
		this.props.loadAssets();
	}

	componentDidUpdate() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		const { auth, signOut, assets } = this.props;
		const { open } = this.state;
		return (
			<div>
				<nav id='navbar-container' className="navbar">
				<div id="main-navbar" className="container">
					<NavLink onClick={this.hideDrawer} exact to="/">
						Home
					</NavLink>
					<NavLink onClick={this.hideDrawer} to="/about">About</NavLink>
					<NavLink onClick={this.hideDrawer} to="/team">Team</NavLink>
					<NavLink onClick={this.hideDrawer} to="/timeline">Timeline</NavLink>
					<span className="brochure" onClick={this.onOpenModal}>Brochure</span>					
					{auth && <NavLink onClick={this.hideDrawer} to="/dashboard">My Events</NavLink>}
					{auth ? (
						<button className="btn" onClick={signOut}>
							Sign Out
						</button>
					) : (
						<SignIn />
					)}
				</div>
				<div id="drawer-button" className="container">
					<span id="drawer-button-span" onClick={this.showDrawer}>
						<i className="fa fa-bars" />
					</span>
				</div>

				<div
					id="black-background"
					className={this.state.drawerOut ? 'black-background-visible' : null}
					onClick={this.hideDrawer}
				/>

				<div id="drawer" className={this.state.drawerOut ? 'drawer-visible' : null}>
					<NavLink onClick={this.hideDrawer} exact to="/">
						Home
					</NavLink>
					<NavLink onClick={this.hideDrawer} to="/about">
						About
					</NavLink>
					<NavLink onClick={this.hideDrawer} to="/team">
						Team
					</NavLink>
					<NavLink onClick={this.hideDrawer} to="/timeline">
						Timeline
					</NavLink>
					{/* <a className="mobileBrochure brochure" href={assets.assets.brochureDownload}>Brochure</a> */}
					{assets.assets && <a className="mobileBrochure brochure" href={assets.assets.brochureDownload}>Brochure</a>}
					{auth && <NavLink onClick={this.hideDrawer} to="/dashboard">
						My Events
					</NavLink>}
					{auth ? (
						<button className="btn" onClick={signOut}>
							Sign Out
						</button>
					) : (
						<SignIn />
					)}
				</div>
			</nav>
			
			<Modal open={open} onClose={this.onCloseModal} center>
				{assets.assets && <embed src={assets.assets.brochure} width= "700" height= "750" />}
        	</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { auth: state.auth, assets: state.assets };
};

export default connect(
	mapStateToProps,
	{ signOut, loadAssets }
)(Navbar);
