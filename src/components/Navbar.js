import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { signOut } from '../actions/authActions';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerOut: false
		};
	}

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

	render() {
		const { auth, signOut } = this.props;
		return (
			<nav className="navbar">
				<div id="main-navbar" className="container">
					<NavLink exact to="/">
						Home
					</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/team">Team</NavLink>
					<NavLink to="/timeline">Timeline</NavLink>
					{auth && <NavLink to="/dashboard">My Events</NavLink>}
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
					<NavLink onClick={this.hideDrawer} to="/dashboard">
						My Events
					</NavLink>
					{auth ? (
						<button className="btn" onClick={signOut}>
							Sign Out
						</button>
					) : (
						<SignIn />
					)}
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(
	mapStateToProps,
	{ signOut }
)(Navbar);
