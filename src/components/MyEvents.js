import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Loaderx from './Loader';
import { unregisterFromEvent } from '../actions/eventActions';
import { fetchUser } from '../actions/authActions';
import { loadUserPhone, saveUserPhone } from '../actions/userPhoneActions';
import ReactTooltip from 'react-tooltip';

class MyEvents extends Component {
	constructor(props) {
		super(props);
		this.addPhone = this.addPhone.bind(this);
	}

	componentDidMount() {
		this.props.fetchUser();
		if (this.props.auth.uid) {
			this.props.loadUserPhone();
		}
	}

	validateForm = () => {
		return new Promise((resolve, reject) => {
			let phoneNo = this.refs.phone.value
			if (phoneNo.length !== 10) {
				alert('Please enter a 10 digit phone number')
				reject()
			} else if (isNaN(phoneNo)) {
				alert('Value should be numeric.')
				phoneNo = ""
				reject()
			} else {
				resolve()
			}
		})
	}

	onChange = e => {
		if (e.target.value.length !== 10 || isNaN(e.target.value)) {
			this.refs.phone.style.border = "2px solid #e60000"
		} else {
			this.refs.phone.style.border = "2px solid #40ff00"
		}
	}

	addPhone(event) {
		event.preventDefault();
		this.validateForm()
			.then(() => {
				this.props.saveUserPhone(this.refs.phone.value);
				this.refs.phone.value = ""
				this.refs.phone.style.border = "2px solid #292929"
			})
			.catch(() => console.log('Resolve error.'))		
	}

	render() {
		const { event, auth, userPhone, unregisterFromEvent } = this.props;
		if (event.loadingEvents) return <Loaderx/>;
		let registeredEvents;
		registeredEvents = event.events.filter(event => Object.keys(event.participants || {}).includes(auth.uid));
		return (
			<div className="container">
				<div className="my-events">
					<div className="my-events__user-profile" id="user-profile-main">
						<div className="user-data">
							<div className="my-events__user-image">
								<img src={auth.photoURL} alt="User" />
							</div>
							<div className="user-profile-wrapper">
								<h1>{auth.displayName}</h1>
								<p>Mobile No. : {userPhone.phone}</p>
							</div>
						</div>
						<div ref="userContactField" className="user-contact">
							<form onSubmit={this.addPhone}>
								<input onChange={this.onChange} type="text" placeholder="Mobile" ref="phone" />
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
														<FontAwesome data-tip='Unregister' name="trash" size="1x" onClick={() => unregisterFromEvent(e)} />
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
				<ReactTooltip className='react-tooltip' effect='solid' delayShow={300} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		event: state.event,
		auth: state.auth,
		userPhone: state.userPhone
	};
};

export default connect(
	mapStateToProps,
	{ unregisterFromEvent, loadUserPhone, saveUserPhone, fetchUser }
)(MyEvents);
