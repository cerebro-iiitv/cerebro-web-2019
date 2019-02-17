import React from 'react';
import { connect } from 'react-redux';
import Loaderx from './Loader';
import EventCard from './EventCard';

const EventsList = props => {
	if (props.event.loadingEvents) return <Loaderx/>;
	return (
		<div className="container">
			<main className="events">
				<h1>Events</h1>
				<div className="events__events-list">
					{props.event.events.map((event, index) => (
						<EventCard
							name={event.name}
							imageURL={event.img}
							description={event.description}
							key={event.name}
							index={index}
						/>
					))}
				</div>
			</main>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		event: state.event
	};
};

export default connect(
	mapStateToProps,
	{}
)(EventsList);
