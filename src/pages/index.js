import React from 'react';
import Layout from '../components/layout';
import { HomeHeader, Banner, BannerButton } from '../utils';
import img from '../images/bcg/homeBcg.jpg';
import Seo from '../components/seo';
import QuickInfo from '../components/HomeComponents/QuickInfo';
// import Gallery from '../components/HomeComponents/Gallery';
// import Menu from '../components/HomeComponents/Menu';
import { Link } from 'gatsby';

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<HomeHeader img={img}>
			<Banner title="Fine Dining" subtitle="65, MG Road-Bangalore, KA">
				<Link to="/menu/" style={{ textDecoration: 'none' }}>
					<BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
				</Link>
			</Banner>
		</HomeHeader>
		<QuickInfo />
		{/* <Gallery /> */}
		{/* <Menu /> */}
	</Layout>
);

export default IndexPage;
