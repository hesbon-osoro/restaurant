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
const FooterWrapper = styled.footer`
	padding: 2rem 0;
	background: ${styles.colors.mainBlack};
	.icons {
		width: 10rem;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
	}
	.icon {
		color: ${styles.colors.mainWhite};
		font-size: 1.3rem;
		${styles.transObject({})};
		&:hover {
			color: ${styles.colors.mainPrimary};
		}
	}
	.copyright {
		color: ${styles.colors.mainWhite};
		text-transform: capitalize;
		text-align: center;
		margin: 1rem 0;
	}
	.title {
		text-align: center;
		width: 12rem;
		color: ${styles.colors.mainYellow};
		text-transform: uppercase;
		padding: 0.3rem 1rem;
		margin: 0 auto 2rem auto;
		font-size: 1.5rem;
		${styles.border({ color: `${styles.colors.mainYellow}` })};
	}
`;

export default Footer;
