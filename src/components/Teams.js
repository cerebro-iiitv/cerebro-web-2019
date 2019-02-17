import React from 'react';
import { connect } from 'react-redux';

import { setTeam } from '../actions/teamActions';

import Team from './Team';

class Teams extends React.Component {
	componentDidMount() {
		this.props.setTeam();
	}

	render() {
		// console.log(this.props.team, 'ser');
		return (
			<div className="container">
				{this.props.team.team.map(team => (
					<Team key={team.name} name={team.name} members={team.members} />
				))}
			</div>
		);
	}
}

const mapStateToProps = ({ team }) => ({ team });

export default connect(
	mapStateToProps,
	{ setTeam }
)(Teams);
