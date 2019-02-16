import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unregisterFromEvent } from '../actions/eventActions';
import { Link } from 'react-router-dom';
import image from '../img/college.jpg';
import trash from '../img/trash.svg';

import FontAwesome from 'react-fontawesome';

class MyEvents extends Component {
	render() {
		const { event, auth, unregisterFromEvent } = this.props;
		if (event.loadingEvents) return <div>Loading</div>;
		let registeredEvents;
		registeredEvents = event.events.filter(event => Object.keys(event.participants || {}).includes(auth.uid));
		return (
			<div className="my-events">
				<div className="my-events__user-profile" id="user-profile-main">
					<div className="user-data">
						<div style={{ backgroundImage: `url(${auth.photoURL})` }} />
						<div className="user-profile-wrapper">
							<h1>{auth.displayName}</h1>
							<p>Mobile No. : 918273912</p>
						</div>
					</div>
					<div className="user-contact">
						<form>
							<input type="text" placeholder="Mobile" />
							<input type="submit" value="Save" />
						</form>
					</div>
				</div>
				<div className="my-events__events-table-wrapper">
					<div className="events-table">
						<h1 className="section-title">Registered Events</h1>
						<table className="my-events-table">
							<thead>
								<tr className="my-events-table-header">
									<th className="td-no">#</th>
									<th className="td-eventname">Event Name</th>
									<th className="td-starts">Starts On</th>
									<th className="td-action">Action</th>
								</tr>
							</thead>
							<tbody>
								{registeredEvents
									? registeredEvents.map((e, ind) => {
											return (
												<tr className="data-row" key={ind + 1}>
													<td className="td-no">{ind + 1}</td>
													<td className="td-eventname">
														<Link to={`/events/${e.id}`}>{e.name}</Link>
													</td>
													<td className="td-starts">{e['start-time']}</td>
													<td className="td-action">
														<FontAwesome name="trash" size="1x" onClick={() => unregisterFromEvent(e)} />
													</td>
												</tr>
											);
									  })
									: null}
							</tbody>
						</table>
					</div>
				</div>
			</div>
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
	{ unregisterFromEvent }
)(MyEvents);
