import React from 'react';

import UserCard from './UserCard';

import '../styles/team.css';

const Team = ({ name, members }) => (
	<div className="team">
		<h1 className="heading--primary">{name} Team</h1>
		<div className="team__members">
			{members.map(member => (
				<UserCard key={member.name} name={member.name} imageURL={member.img} twitterURL={member.links.twitter} githubURL={member.links.github} linkedinURL={member.links.linkedin} />
			))}
		</div>
	</div>
);

export default Team;
