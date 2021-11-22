import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Product from './Product';
const Menu = () => {
	const data = useStaticQuery(graphql`
		{
			items: allContentfulMenu {
				edges {
					node {
						name
						price
						id
						ingredients
						img {
							file {
								url
							}
						}
					}
				}
			}
		}
	`);
	const { edges } = data.items;
	console.log(edges);
	return (
		<Section>
			<Title title="featured items" message="little taste" />
			<ProductList>
				{edges.map(({ node }) => (
					<Product key={node.id} product={node} />
				))}
			</ProductList>
		</Section>
	);
};

export const ProductList = styled.div`
	margin: 3rem 0;
	display: grid;
	grid-template-columns: 100%;
	grid-row-gap: 3rem;
	@media (min-width: 576px) {
		display: grid;
		grid-template-columns: 95%;
	}
	@media (min-width: 776px) {
		grid-template-columns: 80%;
		justify-content: center;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
	}
`;
export default Menu;
