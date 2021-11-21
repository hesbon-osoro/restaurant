import React from 'react';
import Layout from '../components/layout';
import { HomeHeader, Banner, BannerButton } from '../utils';
import img from '../images/bcg/homeBcg.jpg';
import Seo from '../components/seo';
import QuickInfo from '../components/HomeComponents/QuickInfo';

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<HomeHeader img={img}>
			<Banner title="Fine Dining" subtitle="65, MG Road-Bangalore, KA">
				<BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
			</Banner>
		</HomeHeader>
		<QuickInfo />
	</Layout>
);

export default IndexPage;
