import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerForEvent, unregisterFromEvent } from '../actions/eventActions';
import SignIn from './SignIn';
import Loaderx from './Loader';

class Event extends React.Component {

	componentDidMount() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

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
		if (loadingEvents && !eventDetails) return <Loaderx />;
		if (eventId > events.length) return <div>Invalid!</div>;
		
		const registered = eventDetails && eventDetails.participants && auth ? eventDetails.participants[auth.uid] : false;
		return (
			<main className="event">
				<div className="container">
					<Link to="/">
						<button className="btn event__backbtn">Back</button>
					</Link>
					<section className="event__header">
						<div className="event__header-logo">
							<img src={eventDetails.img} alt="Logo" />
						</div>
						<div className="event__header-name">{eventDetails.name}</div>
						{!auth && <SignIn/>}
						{auth && !registered && !eventDetails.registrationClosed && (
							<button className="signInBtn" onClick={() => registerForEvent(eventDetails)}>
								Register
							</button>
						)}
						{auth && registered && (
							<button className="btn" onClick={() => unregisterFromEvent(eventDetails)}>
								Unregister
							</button>
						)}
					</section>
					<section className="event__content">
						<div className="event__info">
							<h2 className="heading--secondary">{eventDetails.description}</h2>
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
								<h2 className="heading--secondary"><u className="heading">Contact</u></h2>
								{eventDetails.contact.map(user => (
									<p key={user}>
										<span>{user.name}</span>, {user.role} { user.phone &&<span><span> - </span> <a href={`tel:${user.phone}`}><u>{user.phone}</u></a></span>}
									</p>
								))}
							</div>
						</div>
						<div className="event__rules">
							<h2 className="heading--secondary"><u className="heading">Rules</u></h2>
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
