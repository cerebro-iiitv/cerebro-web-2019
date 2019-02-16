import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getStore } from '../store';
import { fetchUser } from '../actions/authActions';
import { loadEvents } from '../actions/eventActions';

import Navbar from './Navbar';
import Social from './Social';
import HomePage from './HomePage';
import EventTimeline from './EventTimeline';
import Event from './Event';
import About from './About';
import Teams from './Teams';
import MyEvents from './MyEvents';
import requiresAuth from './requiresAuth';

import '../sass/main.scss';

getStore();
class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
		this.props.loadEvents();
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Social />
					<div className="main">
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/about" component={About} />
							<Route exact path="/dashboard" component={requiresAuth(MyEvents)} />
							<Route exact path="/timeline" component={EventTimeline} />
							<Route exact path="/team" component={Teams} />
							<Route exact path="/events/:id" component={Event} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(
	null,
	{ fetchUser, loadEvents }
)(App);
