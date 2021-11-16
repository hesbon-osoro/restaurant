import React, { Component } from 'react';
import Navbarheader from './NavbarHeader';
import Navbaricons from './NavbarIcons';
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
				<Navbarheader handleNavbar={this.handleNavbar} />
				<NavbarLinks />
				<Navbaricons />
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
