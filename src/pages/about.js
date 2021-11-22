import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Banner, PageHeader } from '../utils';
import aboutImg from '../images/bcg/aboutBcg.jpg';
import About from '../components/About/About';

const AboutPage = () => {
	return (
		<Layout>
			<Seo title="About" />
			<PageHeader img={aboutImg}>
				<Banner title="about us" subtitle="a little about us" />
			</PageHeader>
			<About />
		</Layout>
	);
};

export default AboutPage;
