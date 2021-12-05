import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Banner, PageHeader } from '../utils';
import menuImg from '../images/bcg/menuBcg.jpg';
import MenuItems from '../components/HomeComponents/Menu';
import Gallery from '../components/HomeComponents/Gallery';

const Menu = () => {
	return (
		<Layout>
			<Seo title="Menu" />
			<PageHeader img={menuImg}>
				<Banner title="our menu" subtitle="the best in town" />
			</PageHeader>
			<Gallery />
			<MenuItems />
		</Layout>
	);
};

export default Menu;
