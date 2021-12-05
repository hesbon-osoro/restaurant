import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import NavbarIcons from './NavbarIcons';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';

class Navbar extends Component {
	state = { navbarOpen: false };
	handleNavbar = () => {
		this.setState(() => {
			return { navbarOpen: !this.state.navbarOpen };
		});
	};
	render() {
		return (
			<NavWrapper>
				<NavbarHeader handleNavbar={this.handleNavbar} />
				<NavbarLinks navbarOpen={this.state.navbarOpen} />
				<NavbarIcons />
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
	}
`;
export default Navbar;
