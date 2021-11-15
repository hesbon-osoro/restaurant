import React, { Component } from 'react';
import Navbarheader from './NavbarHeader';
import Navbaricons from './NavbarIcons';
import NavbarLinks from './NavbarLinks';

class Navbar extends Component {
	render() {
		return (
			<nav>
				<Navbarheader />
				<NavbarLinks />
				<Navbaricons />
			</nav>
		);
	}
}
export default Navbar;
