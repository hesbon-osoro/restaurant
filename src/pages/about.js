import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Banner, PageHeader } from '../utils';
import aboutImg from '../images/bcg/aboutBcg.jpg';

const About = () => {
	return (
		<Layout>
			<Seo title="About" />
			<PageHeader img={aboutImg}>
				<Banner title='about us' subtitle='a little about us'/>
			</PageHeader>
		</Layout>
	);
};

export default About;
