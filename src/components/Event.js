import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerForEvent, unregisterFromEvent } from '../actions/eventActions';
import SignIn from './SignIn';

class Event extends React.Component {
	render() {
		const {
			event: { events, loadingEvents },
			registerForEvent,
			unregisterFromEvent,
			auth,
			match
		} = this.props;
		const eventId = match.params.id;
		const eventDetails = events[eventId];
		if (loadingEvents && !eventDetails) return <div>Loading</div>;
		if (eventId > events.length) return <div>Invalid!</div>;
		
		const registered = eventDetails && eventDetails.participants && auth ? eventDetails.participants[auth.uid] : false;
		return (
			<main className="event">
				<div className="container">
					<Link to="/">
						<button className="btn">Back</button>
					</Link>
					<section className="event__header">
						<div className="event__header-logo">
							<img src={eventDetails.img} alt="Logo" />
						</div>
						<div className="event__header-name">{eventDetails.name}</div>
					</section>
					<section className="event__content">
						<div className="event__info">
							<p>{eventDetails.description}</p>
							<br/>
							{!auth && <SignIn/>}
							{auth && !registered && (
								<button className="btn" onClick={() => registerForEvent(eventDetails)}>
									Register
								</button>
							)}
							{auth && registered && (
								<button className="btn" onClick={() => unregisterFromEvent(eventDetails)}>
									Unregister
								</button>
							)}
							<br/>
							<div className="event__details">
								<p>
									<span className="paragraph__highlight">Prizes Worth:</span> {eventDetails['prize-worth']}
								</p>
								<p>
									<span className="paragraph__highlight">Team Size:</span> {eventDetails['team-size']}
								</p>
								<p>
									<span className="paragraph__highlight">Venue:</span> {eventDetails.venue}
								</p>
								{/* <p> Uncomment this later
									<span className="paragraph__highlight">Date:</span> {eventDetails['start-date']} to {eventDetails['end-date']}
								</p> */}
								<p>
									<span className="paragraph__highlight">Time:</span> {eventDetails['start-time']} to{' '}
									{eventDetails['end-time']}
								</p>
							</div>
							<div className="event__contact">
								<h2 className="heading--secondary">Contact</h2>
								{eventDetails.contact.map(user => (
									<p key={user}>
										{user.name} (+91 {user.phone}) - {user.role}
									</p>
								))}
							</div>
						</div>
						<div className="event__rules">
							<h2 className="heading--secondary">Rules</h2>
							<ul>
								{eventDetails.rules.map(rule => (
									<li key={rule} className="event__rule">
										{rule}
									</li>
								))}
							</ul>
						</div>
					</section>
				</div>
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		event: state.event,
		auth: state.auth
	};
};

export default connect(
	mapStateToProps,
	{
		registerForEvent,
		unregisterFromEvent
	}
)(Event);
