import React from 'react';

import UserCard from './UserCard';

import '../styles/team.css';

const Team = ({ name, members }) => (
	<div className="team">
		<h1 className="heading--primary"><u>{name} Team</u></h1>
		<div className="team__members">
			{members.map(member => (
				<UserCard key={member.name} name={member.name} role={member.role} imageURL={member.img} twitterURL={member.links.twitter} githubURL={member.links.github} linkedinURL={member.links.linkedin} />
			))}
		</div>
	</div>
);

export default Team;
