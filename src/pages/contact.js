import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Banner, PageHeader } from '../utils';
import contactImg from '../images/bcg/contactBcg.jpg';

const Contact = () => {
	return (
		<Layout>
			<Seo title="Contact" />
			<PageHeader img={contactImg}>
				<Banner title='contact us' subtitle="Let's get in touch"/>
			</PageHeader>
		</Layout>
	);
};

export default Contact;
