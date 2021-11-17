import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { Banner, PageHeader } from '../utils';

const NotFoundPage = () => (
	<Layout>
		<Seo title="404: Not found" />
		<PageHeader>
			<Banner
				title="404: Not Found"
				subtitle="You just hit a route that doesn&#39;t exist... the sadness."
			/>
		</PageHeader>
	</Layout>
);

export default NotFoundPage;
