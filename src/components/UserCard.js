import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from '../img/favicon.png';

const UserCard = ({ name, imageURL, twitterURL, githubURL, linkedinURL, role }) => (
	<div className="user-card">
		<div className="user-card__image">
			{ imageURL ? (<img src={imageURL} alt="User Avatar" />) : (<img src={Logo} alt="User Avatar" />)}
		</div>
		<div className="user-card__overlay">
			<div className="user-card__username">{name}</div>
			<div className="user-card__role">{role}</div>
			<div className="user-card__social-icons">
				{githubURL && githubURL !== '' ? (
					<a className="user-card__github-icon" href={githubURL} rel="noopener noreferrer" target="_blank">
						<FaGithub size={25} className="user-card__social-icon" />
					</a>
				) : null}
				{twitterURL && twitterURL !== '' ? (
					<a className="user-card__twitter-icon" href={twitterURL} rel="noopener noreferrer" target="_blank">
						<FaTwitter size={25} className="user-card__social-icon" />
					</a>
				) : null}
				{linkedinURL && linkedinURL !== '' ? (
					<a className="user-card__linkedin-icon" href={linkedinURL} rel="noopener noreferrer" target="_blank">
						<FaLinkedin size={25} className="user-card__social-icon" />
					</a>
				) : null}
			</div>
		</div>
	</div>
);

export default UserCard;
