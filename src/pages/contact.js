import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Banner, PageHeader } from '../utils';
import contactImg from '../images/bcg/contactBcg.jpg';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
	return (
		<Layout>
			<Seo title="Contact" />
			<PageHeader img={contactImg}>
				<Banner title="contact us" subtitle="Let's get in touch" />
			</PageHeader>
			<Contact />
		</Layout>
	);
};

export default ContactPage;
