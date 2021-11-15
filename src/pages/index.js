import React from 'react';
import Layout from '../components/layout';
import { FaBlackTie } from 'react-icons/fa';
import Seo from '../components/seo';

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<h3>
			<FaBlackTie />
			The Restaurant Site
		</h3>
	</Layout>
);

export default IndexPage;
