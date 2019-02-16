import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ name, imageURL, description, index }) => (
	<div className="event-card">
		<div className="event-card__image">
			<img src={imageURL} alt="Event" />
		</div>
		<h3 className="event-card__event-name">{name}</h3>
		<p className="event-card__description">{description}</p>
		<Link to={`/events/${index}`}>
			<button className="btn">More Info</button>
		</Link>
	</div>
);

export default EventCard;
