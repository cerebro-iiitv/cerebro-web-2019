import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const UserCard = ({ name, imageURL, twitterURL, githubURL, linkedinURL }) => (
	<div className="user-card">
		<div className="user-card__image">
			<img src={imageURL} alt="User Avatar" />
		</div>
		<div className="user-card__overlay">
			<p className="user-card__username">{name}</p>
			<div className="user-card__social-icons">
				{githubURL && githubURL !== '' ? (
					<a href={githubURL} rel="noopener noreferrer" target="_blank">
						<FaGithub size={25} className="user-card__social-icon" />
					</a>
				) : null}
				{twitterURL && twitterURL !== '' ? (
					<a href={twitterURL} rel="noopener noreferrer" target="_blank">
						<FaTwitter size={25} className="user-card__social-icon" />
					</a>
				) : null}
				{linkedinURL && linkedinURL !== '' ? (
					<a href={linkedinURL} rel="noopener noreferrer" target="_blank">
						<FaLinkedin size={25} className="user-card__social-icon" />
					</a>
				) : null}
			</div>
		</div>
	</div>
);

export default UserCard;
