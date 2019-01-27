import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { registerToEvent, unregisterFromEvent } from '../actions/eventActions';

class Panel extends React.Component {
    navigateToEvent = () => {
        this.props.history.push('/events/' + this.props.event.id);
    }

    handleRegister() {
        let isRegistered = _.some(Object.keys(this.props.event.participants), uid => uid === this.props.user.uid);
        
        if (isRegistered) {
            this.props.unregisterFromEvent(this.props.event);
            alert(`You have successfully unregistered from ${ this.props.event.name }`);
        } else {
            this.props.registerToEvent(this.props.event);
            alert(`You have successfully registered for ${ this.props.event.name }`);
        }
    }

    render() {
        let isRegistered = this.props.user && _.some(Object.keys(this.props.event.participants), uid => uid === this.props.user.uid);

        return (
            <div>
                <div className="uk-card uk-card-body">
                    <div className="panel-img-container">
                        <img src={ this.props.event.img || './fest-logo.png' } className="panel-img" />
                    </div>
                    <h3 className="uk-card-title">{ this.props.event.name }</h3>
                    <p className="uk-text-left panel-team-size">{ (this.props.event.teamsize) ? this.props.event.teamsize : 'To Be Decided' }</p>
                    <p className="uk-text-left panel-content">{ this.props.event.description }</p>
                    <p className="panel-buttons">
                        {
                            this.props.user &&
                                (isRegistered ? (
                                        <span className="panel-unregister uk-border-pill" onClick="return false;"> Unregister</span>
                                    ) : (
                                        <span className="panel-register uk-border-pill" onClick="return false;">Register</span>
                                    )
                                )
                        }
                        <span className="panel-more uk-border-pill" onClick={ this.navigateToEvent }>View Details</span>
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        {
            unregisterFromEvent,
            registerToEvent
        }
    )(Panel)
);
