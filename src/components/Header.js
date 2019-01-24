import React from 'react';
import { connect } from 'react-redux';

import SignIn from '../signIn';

class Header extends React.Component {
    render() {
        return <div>
            {this.props.signedIn? 'You have logged in': 'Please sign in'}
            {!this.props.signedIn && <SignIn />}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        signedIn: state.auth.signedIn
    }
};

export default connect(mapStateToProps)(Header);
