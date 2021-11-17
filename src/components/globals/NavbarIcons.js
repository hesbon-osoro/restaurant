import React, { Component } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import { styles } from '../../utils';

class NavbarIcons extends Component {
	state = {
		icons: [
			{
				id: 0,
				icon: <FaInstagram className="icon instagram-icon" />,
				path: ``,
			},
			{
				id: 1,
				icon: <FaTwitter className="icon twitter-icon" />,
				path: ``,
			},
			{
				id: 2,
				icon: <FaLinkedin className="icon linkedin-icon" />,
				path: ``,
			},
		],
	};
	render() {
		return (
			<IconWrapper>
				{this.state.icons.map(({ id, icon, path }) => (
					<a href={path} key={id} target="_blank" rel="noopener noreferrer">
						{icon}
					</a>
				))}
			</IconWrapper>
		);
	}
}

const IconWrapper = styled.div`
	.icon{
		font-size: 1.3rem;
		cursor: pointer;
		${styles.transObject({})};
	}
	.instagram-icon{
		color: #da5f53;
	}
	.twitter-icon{
		color: #4edeec;
	}
	.linkedin-icon{
		color: #af5cc3;
	}
	.icon:hover{
		color: ${styles.colors.mainYellow};
	}
	display: none;
	@media (min-width: 768px) {
		width: 8rem;
		display: flex;
		justify-content: space-around;
	}
`
export default NavbarIcons;
