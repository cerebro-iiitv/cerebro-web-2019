import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import { signIn } from '../actions/authActions';

class Signin extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	render() {
		return (
			<button className="btn" onClick={this.props.signIn}>
				<FontAwesome name="google" /> Sign In
			</button>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(
	mapStateToProps,
	{ signIn }
)(Signin);
