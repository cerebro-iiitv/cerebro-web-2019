import React from 'react';
import { connect } from 'react-redux';

import { setTeam } from '../actions/teamActions';

import Team from './Team';
import Loaderx from './Loader';

class Teams extends React.Component {
	componentDidMount() {
		this.props.setTeam();
	}

	render() {
		// console.log(this.props.team, 'ser');
		if (this.props.team.loadingTeams) return <div id='team-loader'><Loaderx/></div>;
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
