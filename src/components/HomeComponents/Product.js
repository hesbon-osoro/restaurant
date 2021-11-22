import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import Img from 'gatsby-image';

const Product = ({ product }) => {
	const { name, price, ingredients } = product;
	// const { fixed } = product.image;
	const { file } = product.img;
	return (
		<ProductWrapper>
			<Img fixed={fixed} className="img" />
			<img src={file.url} alt="" className="img" />
			<div className="text">
				<div className="product-content">
					<h3 className="name">{name}</h3>
					<h3 className="price">
						$<span>{price}</span>
					</h3>
				</div>{' '}
				<p className="info">{ingredients}</p>
			</div>
		</ProductWrapper>
	);
};
export const ProductWrapper = styled.div`
	@media (min-width: 576px) {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-column-gap: 1rem;
	}
	.img {
		border-radius: 0.5rem;
		width: 150px;
		height: 150px;
	}
	.product-content {
		display: flex;
		justify-content: space-between;
		font-size: 1.4rem;
		text-transform: uppercase;
	}
	.name {
		color: ${styles.colors.mainGrey};
		margin-top: 0.5rem;
	}
	.price {
		color: ${styles.colors.mainYellow};
		margin-top: 0.5rem;
	}
	.info {
		margin-top: 0.5rem;
		word-spacing: 0.2rem;
		text-transform: lowercase;
	}
`;
export default Product;
