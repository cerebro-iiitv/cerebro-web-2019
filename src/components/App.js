import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as firebase from 'firebase';

import { getState, getStore } from '../store';
import { fetchUser } from '../actions/authActions';
import { loadEvents } from '../actions/eventActions';

import Navbar from './Navbar';
import Social from './Social';
import HomePage from './HomePage';
import EventTimeline from './EventTimeline';
import Event from './Event';
import EventsList from './EventsList';
import About from './About';
import Team from './Team';
import MyEvents from './MyEvents';
import requiresAuth from './requiresAuth';

import '../sass/main.scss';

const store = getStore();

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
							<Route exact path="/team" component={Team} />
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
