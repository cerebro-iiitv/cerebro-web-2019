import React from 'react';
// import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { loadTimeline } from '../actions/timelineActions';
import { connect } from 'react-redux';
import  download  from '../img/download.svg';
import { Link } from 'react-router-dom';
import Loaderx from './Loader';

class EventTimeline extends React.Component {
	componentDidMount() {
    this.props.loadTimeline();    
	}

	render() {
	  if (this.props.timeline.loadingTimeline) return <Loaderx/>;

		return (
      <div>
        <div>
          <a href="https://github.com/cerebro-iiitv/cerebro-web-2019/files/2896857/timeline.pdf" className="timelinePdf">
            <img src={download} alt="download Logo" className="download-icons__icon" />
          </a>
        </div>
        <VerticalTimeline>
          {this.props.timeline.timeline.map(timeline => (
              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={timeline.time}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <Link className="eventLink" to={`/events/${timeline.id}`}>

              <h3 className="vertical-timeline-element-title">{timeline.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">{timeline.title}</h4>
              <p>
                {timeline.desc}
              </p>
            </Link>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
		);
	}
}

const mapStateToProps = ({ timeline }) => ({ timeline });

export default connect(
	mapStateToProps,
	{ loadTimeline }
)(EventTimeline);