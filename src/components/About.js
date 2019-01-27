import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
    componentDidMount() {
        document.body.scrollTop = 0;
    }

    render() {
        return (
            <div className="uk-container"  >
                <div className="uk-margin-large-top">
                    <div className="about-title">About Fest</div>
                    <p>
                        <span className="primary-color">Indian Institute of Information Technology Vadodara</span> (IIIT-V) is
                        established by the Ministry of Human Resource Development (<span className="primary-color">MHRD</span>),
                        Government Of India under Public Private Partnership (PPP) as
                        Institute of National Importance with a view to develop new knowledge
                        in information technology and to provide manpower of global standards
                        for the information technology industry and to provide for certain other
                        matters connected with such institutions or incidental thereto.
                        The partners in this project are Government Of India, Government of Gujarat,
                        Gujarat Energy Research and Management Institute, Gujarat State Fertilizers
                        and Chemicals and Tata Consultancy Services.
                    </p>
                    <p>
                        <span className="primary-color">Cerebro</span> is the{' '}
                        <span className="primary-color">Annual Technical Festival</span> of Indian Institute of Information
                        Technology, Vadodara held in <span className="primary-color">March</span>. It is entirely organized by the{' '}
                        <span className="primary-color">Technical Society of IIIT, Vadodara</span> and serves as a platform for
                        technophiles to showcase their creativity and intelligence. The festival aims to bring together great minds
                        through various activities like <span className="primary-color">Technical & Literary workshops, events, talks</span>{' '}
                        and <span className="primary-color">exhibitions</span>.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
