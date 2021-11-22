import React from 'react';
import styled from 'styled-component';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { styles, Section } from '../../utils';

const Gallery = () => {
	const data = useStaticQuery(
		graphql`
			{
				img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
					childImageSharp {
						fluid(maxWidth: 500) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
			}
		`
	);
	return <Img fluid={data.img1.childImageSharp.fluid} />;
};
export default Gallery;
