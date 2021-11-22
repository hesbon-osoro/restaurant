import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

class Footer extends Component {
	state = {
		icons: [
			{
				id: 0,
				icon: <FaLinkedin className="icon linkedin-icon" />,
				path: `https://www.linkedin.com/in/wazimu/`,
			},
			{
				id: 1,
				icon: <FaInstagram className="icon instagram-icon" />,
				path: `https://www.instagram.com/wazimu.hb/`,
			},
			{
				id: 2,
				icon: <FaTwitter className="icon twitter-icon" />,
				path: `https://twitter.com/wazimu_hb`,
			},
			{
				id: 3,
				icon: <FaYoutube className="icon youtube-icon" />,
				path: `https://www.youtube.com/channel/UCgHKQfyNh8thOZtS4kfQG-A`,
			},
		],
	};
	render() {
		return (
			<FooterWrapper>
				<div className="title">restaurant</div>
				<div className="icons">
					{this.state.icons.map(({ id, path, icon }) => (
						<a href={path} target="_blank" rel="noopener noreferrer">
							{icon}
						</a>
					))}
				</div>
				<p className="copyright">
					copyright &copy; {new Date().getFullYear()} wazimu
				</p>
			</FooterWrapper>
		);
	}
}
