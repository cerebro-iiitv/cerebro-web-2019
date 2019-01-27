import React from 'react';

const Countdown = props => (
    <div className="countdown">
        <img src="./fest-logo.png" />
        <div className="uk-grid-small uk-child-width-auto timer" uk-grid="true" uk-countdown="date: 2019-03-02T09:00:00+05:30">
            <div>
                <div className="uk-countdown-number uk-countdown-days" />
                <div className="uk-countdown-label uk-text-center">DAYS</div>
            </div>
            <div className="uk-countdown-separator">:</div>
            <div>
                <div className="uk-countdown-number uk-countdown-hours" />
                <div className="uk-countdown-label uk-text-center">HRS</div>
            </div>
            <div className="uk-countdown-separator">:</div>
            <div>
                <div className="uk-countdown-number uk-countdown-seconds" />
                <div className="uk-countdown-label uk-text-center">SECS</div>
            </div>
        </div>
    </div>
);

export default Countdown;
